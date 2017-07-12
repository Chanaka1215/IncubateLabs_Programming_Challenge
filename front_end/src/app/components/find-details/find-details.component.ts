import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find-details',
  templateUrl: './find-details.component.html',
  styleUrls: ['./find-details.component.scss']
})
export class FindDetailsComponent implements OnInit {

  public color = 'warn';
  public availableColors = [
    { name: 'none', color: '' },
    { name: 'Primary', color: 'primary' },
    { name: 'Accent', color: 'accent' },
    { name: 'Warn', color: 'warn' }
  ];

  public rows = [
    {
      'name': 'Hilton',
      'address': '10 colombo',
      'location': 'Collutpitiya',
    },
    {
      'name': 'Hilton',
      'address': '10 colombo',
      'location': 'Collutpitiya',
    },
    {
      'name': 'Hilton',
      'address': '10 colombo',
      'location': 'Collutpitiya',
    },
    {
      'name': 'Hilton',
      'address': '10 colombo',
      'location': 'Collutpitiya',
    },
    {
      'name': 'Hilton',
      'address': '10 colombo',
      'location': 'Collutpitiya',
    },
    {
      'name': 'Hilton',
      'address': '10 colombo',
      'location': 'Collutpitiya',
    },
    {
      'name': 'Hilton',
      'address': '10 colombo',
      'location': 'Collutpitiya',
    },
    {
      'name': 'Hilton',
      'address': '10 colombo',
      'location': 'Collutpitiya',
    },
    {
      'name': 'Hilton',
      'address': '10 colombo',
      'location': 'Collutpitiya',
    },
    {
      'name': 'Hilton',
      'address': '10 colombo',
      'location': 'Collutpitiya',
    },
    {
      'name': 'Hilton',
      'address': '10 colombo',
      'location': 'Collutpitiya',
    },
    {
      'name': 'Hilton',
      'address': '10 colombo',
      'location': 'Collutpitiya',
    },
    {
      'name': 'Hilton',
      'address': '10 colombo',
      'location': 'Collutpitiya',
    },
    {
      'name': 'Hilton',
      'address': '10 colombo',
      'location': 'Collutpitiya',
    },
    {
      'name': 'Hilton',
      'address': '10 colombo',
      'location': 'Collutpitiya',
    },
    {
      'name': 'Hilton',
      'address': '10 colombo',
      'location': 'Collutpitiya',
    },
    {
      'name': 'Hilton',
      'address': '10 colombo',
      'location': 'Collutpitiya',
    },
    {
      'name': 'Hilton',
      'address': '10 colombo',
      'location': 'Collutpitiya',
    },
    {
      'name': 'Hilton',
      'address': '10 colombo',
      'location': 'Collutpitiya',
    },
    {
      'name': 'Hilton',
      'address': '10 colombo',
      'location': 'Collutpitiya',
    },
    {
      'name': 'Hilton',
      'address': '10 colombo',
      'location': 'Collutpitiya',
    },
    {
      'name': 'Hilton',
      'address': '10 colombo',
      'location': 'Collutpitiya',
    },
    {
      'name': 'Hilton',
      'address': '10 colombo',
      'location': 'Collutpitiya',
    },
    {
      'name': 'Hilton',
      'address': '10 colombo',
      'location': 'Collutpitiya',
    },
    {
      'name': 'Hilton',
      'address': '10 colombo',
      'location': 'Collutpitiya',
    },
    {
      'name': 'Hilton',
      'address': '10 colombo',
      'location': 'Collutpitiya',
    }

  ];


  constructor () {
  }

  ngOnInit() {
  }

}
