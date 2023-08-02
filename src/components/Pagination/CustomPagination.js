import React from "react";
import { createTheme, Pagination, ThemeProvider } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#F6BE00',
      contrastText: "#ffff",
    },
  },
});

const CustomPagination = ({ setPage, numberofPages = 10 }) => {

  // scroll to top when page changes
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0)
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
      }}
    >
      <ThemeProvider theme={darkTheme}>
        <Pagination
          count={numberofPages}
          onChange={(e) => handlePageChange(e.target.textContent)}
          color='secondary'
          sx={{
            '& .MuiPaginationItem-root': {
              color: 'inherit',
            },
          }}
          hideNextButton
          hidePrevButton
        />
      </ThemeProvider>
    </div>
  )
}

export default CustomPagination