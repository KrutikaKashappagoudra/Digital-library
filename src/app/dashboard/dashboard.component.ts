import { Component, OnInit } from '@angular/core';
import { Chart, ChartConfiguration, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  barChart: any;
  public pieChart: any;

  ngOnInit(): void {
    this.createBarChart();
    this.createPieChart();
  }

  createBarChart() {
    const barChartConfig: ChartConfiguration = {
      type: 'bar',
      data: {
        labels: ['Person 1', 'Person 2', 'Person 3', 'Person 4', 'Person 5'],
        datasets: [
          {
            label: 'Number of Books Issued',
            data: [5, 8, 12, 7, 4],
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
            align: 'center',
            labels:{
              boxWidth: 10,
              padding: 15
            }
          },
        },
        scales: {
          y: {
            type: 'linear',
            beginAtZero: true,
          }
        }
      }
    };
  
    this.barChart = new Chart('barChartCanvas', barChartConfig);
  }
  
  

  createPieChart() {
    this.pieChart = new Chart('pieChartCanvas', {
      type: 'pie',
      data: {
        labels: ['Person 1', 'Person 2', 'Person 3', 'Person 4', 'Person 5'],
        datasets: [
          {
            data: [14, 22, 33, 20, 11],
            backgroundColor: [
              'rgba(75, 192, 192, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
            align: 'center',
            labels:{
              boxWidth: 12,
              padding: 15
            }
          },
        }
      }
    });
  }
}
