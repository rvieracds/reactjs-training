import React from 'react';
import clsx from 'clsx';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
// import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


// import logo from './logo.svg';
import documentIcon from './pdf-icon.svg';

import './App.css';

const renderStatus = (status) => {
  let cmp = null;

  switch(status) {
    case 'Approved': {
      cmp = <div className="status-reactangle-class" style={{ background: 'rgba(0,161,158,0.1)' }}>{ status }</div>;
      break; 
    }
    case 'Review': {
      cmp = <div className="status-reactangle-class" style={{ background: 'rgba(92,8,255,0.1)' }}>{ status }</div>;
      break; 
    }
    case 'Terms': {
      cmp = <div className="status-reactangle-class" style={{ background: 'rgba(34,0,14,0.1)' }}>{ status }</div>;
      break; 
    }
    case 'Disapproved': {
      cmp = <div className="status-reactangle-class" style={{ background: 'rgba(239,36,0,0.1)' }}>{ status }</div>;
      break; 
    }
    default: {
      cmp = <div className="status-reactangle-class">-</div>;
      break; 
    }
  }
  return cmp;
}

const applicants = [
  { id: 1, name: 'Arbol Mendez', score: 650, progress: 3, assigned: 'Lolo', status: 'Approved', date: 2 },
  { id: 2, name: 'Banana Dulce', score: 550, progress: 2, assigned: 'Pepe', status: 'Review', date: 3 },
  { id: 3, name: 'Teclado Lopez', score: 451, progress: 5, assigned: 'Abcde', status: 'Disapproved', date: 5 },
  { id: 4, name: 'Reloj Fijo', score: 412, progress: 2, assigned: 'Lolo', status: 'Review', date: 5 },
  { id: 5, name: 'Celular Golpeado', score: 650, progress: 5, assigned: 'Koko', status: 'Approved', date: 2 },
  { id: 6, name: 'Botella Dura', score: 940, progress: 1, assigned: 'Pepe', status: 'Terms', date: 4 },
  { id: 7, name: 'Dia Soleado', score: 700, progress: 5, assigned: 'Lolo', status: 'Approved', date: 2 },
  { id: 8, name: 'Monitor Plano', score: 630, progress: 8, assigned: 'Pepe', status: 'Disapproved', date: 1 },
  { id: 9, name: 'Mate Amargo', score: 500, progress: 4, assigned: 'Abcde', status: 'Approved', date: 2 },
  { id: 10, name: 'Luana Marquez', score: 730, progress: 5, assigned: 'Koko', status: 'Terms', date: 1 },
  { id: 11, name: 'Yerba Mate', score: 650, progress: 7, assigned: 'Pepe', status: 'Review', date: 2 },
  { id: 12, name: 'Jackita La Zorra', score: 895, progress: 10, assigned: 'Abcde', status: 'Approved', date: 6 },
];

const nameCell = (cell, row, rowIndex, formatExtraData) => {
  return (
    <div>
      <img src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=48" style={{ marginRight: 12 }} className="img-pic" />
      { cell }
    </div>
  )
}

const assignedCell = (cell, row, rowIndex, formatExtraData) => {
  return (
    <div>
      <img src="https://randomuser.me/api/portraits/men/32.jpg" style={{ marginRight: 12 }} className="img-pic-small" />
      { cell }
    </div>
  )
}

const progressCell = (cell, row, rowIndex, formatExtraData) => {
  // const { deleteMe } = props;
  // const rowId = row.id;
  const progress = cell * 10;
  return (
    // <Button icon labelPosition='left' onClick={() => deleteMe(rowIndex, rowId)}><Icon name='remove' /> Remove </Button> );
    <div>
      <ProgressBar now={progress} variant="custom-progress-bar" />
    </div>
  )
}

const dateCell = (cell, row, rowIndex, formatExtraData) => {
  return (
    <div>
      {(cell === 1) ? 'a day ago' : `${cell} days ago`}
    </div>
  )
}

const statusCell = (cell, row, rowIndex, formatExtraData) => {
  return renderStatus(cell);
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
  headerClasses: 'header-title-class',
  formatter: assignedCell,
}, {
  dataField: 'status',
  text: 'Status',
  headerClasses: 'header-title-class',
  formatter: statusCell,
}, {
  dataField: 'date',
  text: 'Date',
  headerClasses: 'header-title-class',
  formatter: dateCell,
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

const useStyles = makeStyles(theme => ({
  root: {
    width: 360,
    height: 56,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'rgba(34, 0, 14, 0.2)',
    "& label": {
      fontSize: 16,
      color: 'rgba(34, 0, 14, 0.54)',
    },
    "& label.Mui-focused": {
      color: "#00a19e"
    },
    "& input:valid + fieldset": {
      borderWidth: 1,
      borderRadius: 4,
      borderColor: 'rgba(34, 0, 14, 0.2)',
    },
    "& input:valid:focus + fieldset": {
      borderWidth: 1,
      borderRadius: 4,
      borderColor: "#00a19e",
      background: 'rgba(0, 161, 158, 0.05)',
    },

    // ".MuiOutlinedInput-colorSecondary.Mui-focused .MuiOutlinedInput-notchedOutline": {
    //   borderColor: 'orange',
    // },
    // ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    //   borderColor: "#3f51b5",
    //   borderWidth: 10,
    // }
  },
  error: {
    width: 360,
    height: 56,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#ef2400",
    background: 'white',
    "& input:valid:focus + fieldset": {
      borderWidth: 1,
      borderRadius: 4,
      borderColor: "#ef2400",
      background: 'white',
    }
  },
  passwordInput: {
    width: 360,
    height: 56,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'rgba(34, 0, 14, 0.2)',
    "& label.Mui-focused": {
      color: "#00a19e",
      borderWidth: 1,
      borderRadius: 4,
      borderColor: "#00a19e",
      background: 'rgba(0, 161, 158, 0.05)',
    },
    "& label.Mui-focused": {
      borderWidth: 1,
      borderRadius: 4,
      borderColor: "#00a19e",
      background: 'rgba(0, 161, 158, 0.05)',
    },
  },
  input: {
    display: 'none',
  },
  filledButton: {
    backgroundColor: '#ff086e',
    boxShadow: 'none',

    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',

    '&:hover': {
      backgroundColor: '#ff086e',
      boxShadow: 'none',
    },
  },
  
  unfilledButton: {
    backgroundColor: '#fff',
    boxShadow: 'none',

    fontSize: 16,
    color: '#ff086e',

    '&:hover': {
      backgroundColor: '#fff',
      boxShadow: 'none',
    },
  },
}));










// const CustomTextField = withStyles({
//   root: {
//     "& input:valid + fieldset": {
//       borderColor: "green",
//       borderWidth: 2
//     },
//     "& input:invalid + fieldset": {
//       borderColor: "red",
//       borderWidth: 2
//     },
//     "& input:valid:focus + fieldset": {
//       background: "red",
//       padding: "4px !important" // override inline-style
//     }
//   }
// })(TextField);

// const [values, setValues] = React.useState({
//   amount: '',
//   password: '',
//   weight: '',
//   weightRange: '',
//   showPassword: false,
// });

const handleChange = prop => event => {
  // setValues({ ...values, [prop]: event.target.value });
};

const handleClickShowPassword = () => {
  // setValues({ ...values, showPassword: !values.showPassword });
};

const handleMouseDownPassword = event => {
  event.preventDefault();
};


function App() {
  const classes = useStyles();


  const values = {
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
    // showPassword: true,
  }

  return (
    <div style={{ margin: '27px 52px' }}>



      {/* DASHBOARD SCREEN AND INPUTS */}
      {/* <BootstrapTable
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
        bordered={ false }
      />

      <form noValidate autoComplete="off" >

        <TextField
          id="name-input"
          variant="outlined"
          label="Name"
          className={classes.root}
          disabled={false}
          error={false}
          helperText="Enter your full name"
        />

        <div style={{ margin: 50 }}></div>

        <TextField
          id="error-input"
          variant="outlined"
          label="Error"
          className={classes.error}
          disabled={false}
          error={true}
          helperText="This field is required"
        />

        <div style={{ margin: 50 }}></div>

        <TextField
          id="disable-input"
          variant="outlined"
          label="Disabled"
          className={classes.root}
          disabled={true}
          error={false}
          helperText="Enter your full name"
        />
      </form>

      <div style={{ margin: 50 }}></div>

      <FormControl className={classes.root} variant="outlined" >
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={'lalala'}
            // value={values.password}
            className={classes.root}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl> */}



        {/* <div className="documents-rectangle-class"> */}
        <div  className="documents-rectangle-class" style={{ justifyContent: 'space-between' }}>
          <div style={{ flex: 0, backgroundColor: 'pink', marginRight: 24 }} >
            <img src={documentIcon} className="documents-rectangle-icon-class"/>
          </div>

          <div style={{ flex: 1, backgroundColor: 'yellow', flexDirection: 'column' }} >
            <div className="documents-title-left-side-text" >
              Mobile bill
            </div>
            <div className="documents-subtitle-left-side-text" >
              Bill for December 2019
            </div>
          </div>



          <div style={{ flex: 1, flexDirection: 'row', backgroundColor: 'pink', justifyContent: 'center', alignItems: 'center' }}>

            <Button className={classes.unfilledButton} >Don’t have it</Button>
            {/* <Button className={classes.unfilledButton}>Don’t have it</Button> */}

            <input
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
            />

            <label htmlFor="contained-button-file">
              <Button variant="contained" component="span" className={classes.filledButton} >
                Upload
              </Button>
            </label>
          </div>

        </div>


    </div>
  );
}

export default App;
