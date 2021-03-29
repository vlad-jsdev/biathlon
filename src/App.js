import './App.css';
import {useState, useEffect} from "react";
import { Input } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import {
  SortingState,
  IntegratedSorting,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  Toolbar,
  TableHeaderRow,
} from '@devexpress/dx-react-grid-material-ui';
import SearchIcon from '@material-ui/icons/Search';

function App() {
  const [data] = useState([{
      id: 1,
      name: "Эндре Стрёмсхайм",
      hit: 85.6,
      speed: 23.5
    },
    {
      id: 2,
      name: "Александер-Фьелд Андерсен",
      hit: 84,
      speed: 25.7
    },
    {
      id: 3,
      name: "Габриэл Стегмайр",
      hit: 90,
      speed: 25.1
    },
    {
      id: 4,
      name: "Антон Бабиков",
      hit: 84,
      speed: 25.3
    },
    {
      id: 5,
      name: "Томмазо Джакомел",
      hit: 75.3,
      speed: 25.3
    },
    {
      id: 6,
      name: "Якко Олави Ранта",
      hit: 82,
      speed: 24.6
    },
    {
      id: 7,
      name: "Алекс Чисар",
      hit: 87.5,
      speed: 25.7
    },
    {
      id: 8,
      name: "Скотт Гоу",
      hit: 82.9,
      speed: 25.4
    },
    {
      id: 9,
      name: "Айдан Миллар",
      hit: 72,
      speed: 25.4
    },
    {
      id: 10,
      name: "Миха Довжан",
      hit: 88,
      speed: 25.3
    }
  ])
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);


  const handleChange = e => {
    setSearchTerm(e.target.value);
  };
  useEffect(() => {
    const results = data.filter(person =>
        person.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm, data]);
  return (
    <div className="App">
      <Paper style={{ height: "90vh", width: '100%' }}>
        <div className="search"><SearchIcon className="icon"/>
          <Input
              style={{ width:"30rem", marginTop: "2rem" }}
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={handleChange}
          /></div>
        <Grid
            columns={[
              { name: "id",
                title: "Podium"
              },
              { name: 'name',
                title: "Name",
                width: 280
              },
              {
                name: 'hit',
                title: 'Hits, %',
                width: 130
              },
              { name: 'speed',
                title: 'Rate Of Fire, Sec',
                width: 130
              }
            ]}
            rows={searchResults}
        >
          <SortingState
              defaultSorting={[{ columnName: 'id', direction: 'asc' }]}
          />
          <IntegratedSorting/>
        <Table />
        <TableHeaderRow
            showSortingControls/>
        <Toolbar />
        </Grid>
      </Paper>
    </div>
  );
}

export default App;

