// import React from "react";
import { useState } from "react";
import axios from 'axios';
import Gif from "../../components/Gif/index.js";
import SearchBar from "../../components/form/form.jsx";
// import { useSelector, useDispatch } from "react-redux";
import { search } from "../../components/redux/action";
import { Box, Grid } from "@mui/material";
import { useAppSelector, useAppDispatch } from "../../components/redux/hooks";
// import { IRootState } from "../../components/redux/reducer";


// import { Sample } from "../../router.js";


const Search = () => {
  const currentAmount = useAppSelector((state) => state.account.value);
  const [gifs, setGifs] = useState([]);
  const dispatch = useAppDispatch();


  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { data } = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${currentAmount}&api_key=vYaoDT4GVtdV6b3VZtt2yq1ZbYh2Zj3E`, {
    })
    setGifs(data.data)
  }


  return (
    <div className='search-section'>
      <h1 className="Header">GIfsss {currentAmount}</h1>

      <div >
        <div className="searchBar">
          <SearchBar
            gifs={currentAmount}
            handleSubmit={handleSubmit}
            handleChange={(e: React.FormEvent<HTMLInputElement>) => {
              dispatch(search(e.currentTarget.value))
            }}
          />
        </div>
        <Box sx={{ flexGrow: 1, mx: 10 }}>

          <Grid container spacing={2} >

            {gifs.length > 0 &&
              (gifs.map((gif, id) => <Gif {...gif} key={id} />))
            }
          </Grid>
        </Box>

      </div>
    </div>
  );
}



export default Search;