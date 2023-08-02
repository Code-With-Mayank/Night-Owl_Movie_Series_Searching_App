import { Button, Tab, Tabs, TextField, ThemeProvider, createTheme, } from '@mui/material';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import SingleContent from '../../components/SingleContent/SingleContent';
import CustomPagination from '../../components/Pagination/CustomPagination';
import SearchIcon from '@mui/icons-material/Search';


const Search = () => {
  const [type, setType] = useState(0);
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [content, setContent] = useState();
  const [numberOfPages, setNumberOfPages] = useState();

  const darkTheme = createTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#fff",
      },
    },
  });

  const fetchSearch = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${process.env.REACT_APP_API_KEY
      }&language=en-US&query=${searchText}&page=${page}&include_adult=false`
    );

    setContent(data.results);
    setNumberOfPages(data.total_pages);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
    // eslint-disable-next-line
  }, [type, page]);




  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <div style={{ display: 'flex', margin: "15px 0" }}>
          <TextField
            style={{ flex: 1 }}
            className="searchbox"
            label="🔎Search🔎"
            color='warning'
            variant="filled"
            InputLabelProps={{
              style: {
                color: '#F6BE00	',
              },
            }}
            InputProps={{
              style: {
                color: '#fff',
              },
            }}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Button variant='contained'
            style={{ marginLeft: 10, backgroundColor: "#F6BE00", color: "#fff" }}
            onClick={fetchSearch}
          >
            <SearchIcon />
          </Button>
        </div>

        <Tabs
          value={type}
          indicatorColor="secondary"
          textColor="white"
          onChange={(event, newValue) => {
            setType(newValue);
            setPage(1);
          }}
          style={{ paddingBottom: 10 }}
        >
          <Tab style={{ width: "50%" }} label="Search Movies" />
          <Tab style={{ width: "50%" }} label="Search TV Series" />
        </Tabs>

      </ThemeProvider>

      <div className='trending'>
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={type ? "tv" : "movie"}
              vote_average={c.vote_average}
            />
          ))}
        {searchText &&
          !content &&
          (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)}
      </div>
      {numberOfPages > 1 && (
        <CustomPagination setPage={setPage} numberofPages={numberOfPages} />
      )}
    </div>
  )
}

export default Search
