import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})
export class TableComponent implements OnInit {
  typesME = ['easy', 'normal', 'hard'];
  typeDescMe = ['bos', 'hero'];
  sortDirection = false;
  tableDataMapped = [];

  tableData = [
    {
      name: 'mike',
      age: '34',
      country: 'russia',
      type: 'normal',
      typeDesc: null
    },
    {
      name: 'hobo',
      age: '22',
      country: 'turkey',
      type: 'normal',
      typeDesc: null
    },
    {
      name: 'joe',
      age: '64',
      country: 'usa',
      type: 'hard',
      typeDesc: 'bos'
    },
    {
      name: 'ben',
      age: '12',
      country: 'usa',
      type: 'easy',
      typeDesc: null
    },
    {
      name: 'nikolai',
      age: '39',
      country: 'russia',
      type: 'hard',
      typeDesc: 'hero'
    },
    {
      name: 'jason',
      age: '45',
      country: 'india',
      type: 'hard',
      typeDesc: 'bos'
    }
  ];

  constructor() {
  }

  ngOnInit() {
    this.tableDataMapped = this.tableData.map(row => {
      if (row.type === 'hard') {
        row.type = row.typeDesc;
      }
      return row;
    });
  }

  getType(row) {
    let res;
    if (row.type === 'hard') {
      res = row.typeDesc;
    } else {
      res = row.type;
    }
    return res;
  }

  onSort(sortBy) {
    this.sortDirection = !this.sortDirection;

    this.tableData.sort((a, b) => {
      if (this.sortDirection) {
        return a[sortBy] < b[sortBy] ? -1 : a[sortBy] > b[sortBy] ? 1 : 0;

      } else {
        return a[sortBy] > b[sortBy] ? -1 : a[sortBy] < b[sortBy] ? 1 : 0;
      }
    });
  }

  // sort(sortBy) {
  //   this.sortDirection = !this.sortDirection;
  //
  //   if (sortBy === 'type') {
  //     let sortA = sortBy;
  //     let sortB = sortBy;
  //
  //     this.tableData.sort((a, b) => {
  //         if (a[sortBy] === 'hard') {
  //           sortA = 'typeDesc';
  //         }
  //         if (b[sortBy] === 'hard') {
  //           sortB = 'typeDesc';
  //         }
  //         if (this.sortDirection) {
  //           return a[sortA] < b[sortB] ? -1 : a[sortA] > b[sortB] ? 1 : 0;
  //         } else {
  //           return a[sortA] > b[sortB] ? -1 : a[sortA] < b[sortB] ? 1 : 0;
  //         }
  //       }
  //     );
  //   } else {
  //     this.tableData.sort((a, b) => {
  //       if (this.sortDirection) {
  //         const response = a[sortBy] < b[sortBy] ? -1 : a[sortBy] > b[sortBy] ? 1 : 0;
  //         return response;
  //       } else {
  //         const response = a[sortBy] > b[sortBy] ? -1 : a[sortBy] < b[sortBy] ? 1 : 0;
  //         return response;
  //       }
  //     });
  //   }
  // }

}
