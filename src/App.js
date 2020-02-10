import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ProgressBar from 'react-bootstrap/ProgressBar';

// import logo from './logo.svg';
import './App.css';

const applicants = [
  { id: 1, name: 'PEPE', score: 650, progress: 5, assigned: 'LOLO', status: 'Approved', date: 132345952 },
  { id: 2, name: 'PEPE', score: 550, progress: 5, assigned: 'LOLO', status: 'Review', date: 132345952 },
  { id: 3, name: 'PEPE', score: 451, progress: 5, assigned: 'LOLO', status: 'Disapproved', date: 132345952 },
  { id: 4, name: 'PEPE', score: 412, progress: 5, assigned: 'LOLO', status: 'Review', date: 132345952 },
  { id: 5, name: 'PEPE', score: 650, progress: 5, assigned: 'LOLO', status: 'Approved', date: 132345952 },
  { id: 6, name: 'PEPE', score: 940, progress: 5, assigned: 'LOLO', status: 'Terms', date: 132345952 },
  { id: 7, name: 'PEPE', score: 700, progress: 5, assigned: 'LOLO', status: 'Approved', date: 132345952 },
  { id: 8, name: 'PEPE', score: 630, progress: 5, assigned: 'LOLO', status: 'Disapproved', date: 132345952 },
  { id: 9, name: 'PEPE', score: 500, progress: 5, assigned: 'LOLO', status: 'Approved', date: 132345952 },
  { id: 10, name: 'PEPE', score: 730, progress: 5, assigned: 'LOLO', status: 'Terms', date: 132345952 },
  { id: 11, name: 'PEPE', score: 650, progress: 5, assigned: 'LOLO', status: 'Review', date: 132345952 },
  { id: 12, name: 'PEPE', score: 895, progress: 5, assigned: 'LOLO', status: 'Approved', date: 132345952 },
];

const nameCell = (cell, row, rowIndex, formatExtraData) => {
  // const { deleteMe } = props;
  // const rowId = row.id;
  return (
    // <Button icon labelPosition='left' onClick={() => deleteMe(rowIndex, rowId)}><Icon name='remove' /> Remove </Button> );
    <div>
      <img src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=48" style={{ marginRight: 12 }} className="img-pic" />
      { cell }
    </div>
  )
}

const progressCell = (cell, row, rowIndex, formatExtraData) => {
  // const { deleteMe } = props;
  // const rowId = row.id;
  return (
    // <Button icon labelPosition='left' onClick={() => deleteMe(rowIndex, rowId)}><Icon name='remove' /> Remove </Button> );
    <div>
      <ProgressBar now={60} variant="custom-progress-bar" />
    </div>
  )
}

const columns = [{
  dataField: 'name',
  text: 'Name',
  headerClasses: 'header-title-class',
  formatter: nameCell
}, {
  dataField: 'score',
  text: 'Score',
  headerClasses: 'header-title-class',
  sort: true,
  // sortCaret: (order, column) => {
  //   if (!order) return (<span>&nbsp;&nbsp;Desc/Asc</span>);
  //   else if (order === 'asc') return (<span>&nbsp;&nbsp;Desc/<font color="red">Asc</font></span>);
  //   else if (order === 'desc') return (<span>&nbsp;&nbsp;<font color="red">Desc</font>/Asc</span>);
  //   return null;
  // }
}, {
  dataField: 'progress',
  text: 'Progress',
  headerClasses: 'header-title-class',
  formatter: progressCell
}, {
  dataField: 'assigned',
  text: 'Assigned',
  headerClasses: 'header-title-class'
}, {
  dataField: 'status',
  text: 'Status',
  headerClasses: 'header-title-class'
}, {
  dataField: 'date',
  text: 'Date',
  headerClasses: 'header-title-class',
  sort: true,
}];

const customTotal = (from, to, size) => (
  <span className="react-bootstrap-table-pagination-total">
    {/* Showing { from } to { to } of { size } Results */}
    { from }-{ to } of { size }
  </span>
);

// const sizePerPageOptionRenderer = ({
//   text,
//   page,
//   onSizePerPageChange
// }) => (
//   <li
//     key={ text }
//     role="presentation"
//     className="dropdown-item"
//   >
//     <a
//       href="#"
//       tabIndex="-1"
//       role="menuitem"
//       data-page={ page }
//       onMouseDown={ (e) => {
//         e.preventDefault();
//         onSizePerPageChange(page);
//       } }
//       style={ { color: 'red' } }
//     >
//       { text }
//     </a>
//   </li>
// );

const options = {
  paginationSize: 10,
  pageStartIndex: 0,
  // alwaysShowAllBtns: true, // Always show next and previous button
  // withFirstAndLast: false, // Hide the going to First and Last page button
  // hideSizePerPage: true, // Hide the sizePerPage dropdown always
  // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
  // sizePerPageOptionRenderer,
  firstPageText: 'First',
  prePageText: 'Back',
  nextPageText: 'Next',
  lastPageText: 'Last',
  nextPageTitle: 'First page',
  prePageTitle: 'Pre page',
  firstPageTitle: 'Next page',
  lastPageTitle: 'Last page',
  showTotal: true,
  paginationTotalRenderer: customTotal,
  sizePerPageList: [{
    text: '5', value: 5
  }, {
    text: '10', value: 10
  }, {
    text: 'All', value: applicants.length
  }] // A numeric array is also available. the purpose of above example is custom the text
};

const defaultSorted = [{
  dataField: 'name',
  order: 'desc'
}];

function App() {
  return (
    <div style={{ margin: '27px 52px' }}>
      <BootstrapTable
        bootstrap4
        keyField="id"
        data={applicants}
        columns={columns}
        pagination={paginationFactory(options)}
        // hover
        defaultSorted={ defaultSorted }
        // rowStyle={{ backgroundColor: 'white', padding: '50px 50px', margin: '0 100px' }}
        rowClasses="custom-row-class"
        headerClasses="custom-header-class"
        // tableClass="custom-table-class"
        bordered={ false }
      />
    </div>
  );
}

export default App;
