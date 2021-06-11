import React from 'react';
import './styles/App.css';
import logo from './assets/logo.svg';
import Table from './components/Table';

const data_1 = [
	{
		name:  "John",
		age:  29,
		movie_rating:  4,
		city:  "Vancouver",
		region:  "British Columbia",
		country:  "Canada",
	},
	{
		name:  "Sarah",
		age:  32,
		movie_rating:  5,
		city:  "Frankfurt",
		region:  "Hesse",
		country:  "Germany",
	},
	{
		name:  "Dave",
		age:  44,
		movie_rating:  4,
		city:  "San Diego",
		region:  "California",
		country:  "United States",
	},
];

const theadData1 = ['Name', 'Rating', 'Age', 'City', 'State/Province', 'Country'];
const theadData2 = ['Food Product', 'Size', 'Inventory'];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Table
        </h1>

        <div>
			<Table theadData={theadData1} tbodyData={data_1} customClass={''} />
		</div>


      </header>
    </div>
  );
}

export default App;
