

import React from 'react';
import ReactDOM from 'react-dom';
import { DataTable } from 'react-data-components';
import './index.css';

const apiURL = 'https://api.enye.tech/v1/challenge/records';
// const pageMenu = document.querySelector('#page-menu').parentElement;


// pageMenu.style.display = 'none';

function buildTable(data) {

  const tableColumns = [
    { title: 'FirstName', prop: 'FirstName' },
    { title: 'LastName', prop: 'LastName' },
    { title: 'Gender', prop: 'Gender' },
    { title: 'Latitude', prop: 'Latitude' },
    { title: 'Longitude', prop: 'Longitude' },
    { title: 'CreditCardNumber', prop: 'CreditCardNumber' },
    { title: 'CreditCardType', prop: 'CreditCardType' },
    { title: 'Email', prop: 'Email' },
    { title: 'DomainName', prop: 'DomainName' },
    { title: 'PhoneNumber', prop: 'PhoneNumber'},
    { title: 'MacAddress', prop: 'MacAddress'},
    { title: 'URL', prop: 'URL'},
    { title: 'UserName', prop: 'UserName'},
    { title: 'LastLogin', prop: 'LastLogin'},
    { title: 'PaymentMethod', prop: 'PaymentMethod'},
  ];
  // class Table extends React.Component {
  //   render() {
  //     return (
  //       <table>
  //         <tr>
  //           <Columns />
  //         </tr>
  //       </table>
  //     );
  //   }
  // }

  // <div class="container-table"></div>
  return (
    // <div class="container-table">
    <DataTable
      className="container"
      keys="Email"
      columns={tableColumns}
      initialData={data}
    //   pageLength={5}
    // perPageItemCount={20}
      initialPageLength={20}
      initialSortBy={{ prop: 'FirstName', order: 'ascending' }}
    //   initialSortBy={{ prop: 'FirstName', order: 'descending' }}
    //   pageLengthOptions={[ 5, 20, 50 ]}
    />
    // </div>
  );
}

fetch(apiURL)
  .then(response => response.json())
  .then((data) => {
            let dataInfo = data.records.profiles;
    ReactDOM.render(
        buildTable(dataInfo), 
        document.getElementById('root')
        );
        // setTimeout(() => {
          // console.log(document.querySelector('#page-menu').parentElement);
          // document.querySelector('#page-menu').parentElement.style.display = 'none';
          let tableBox = document.querySelector('table');
          let getContainer = document.querySelector('.container');
          let containerTable = document.createElement('div');
          getContainer.removeChild(tableBox);
          containerTable.appendChild(tableBox);
          containerTable.classList.add('container-table');
          getContainer.appendChild(containerTable);
        
        // }, 10);
    });

        // ReactDOM.render(
        //     buildTable(), 
        //     document.getElementById('root')
        //     );
     
    
