import { Pagination, PaginationItem, ThemeProvider } from "@mui/material";

import { PageContext } from "../app/App";
import { createTheme } from "@mui/material";
import { ReactComponent as nextArrow } from "../../resources/svg/nextArrow.svg";
import { ReactComponent as prevArrow } from "../../resources/svg/prevArrow.svg";
import { useContext } from "react";

const Footer = () => {
  const { page, setPage,filter } = useContext(PageContext);
  const theme = createTheme({
    status: {
      danger: "#e53e3e",
    },
    palette: {
      primary: {
        main: "#11b0c8",
        darker: "#053e85",
      },
      neutral: {
        main: "#11b0c8",
        contrastText: "#fff",
      },
    },
  });
  return (
    <div className="footer">
      <div className="footer__container">
        <ThemeProvider theme={theme}>
          <Pagination
            count={42}
            shape="rounded"
            color="neutral"
            page={page}
            disabled={filter.input === ''? false : true}
            onChange={(_, data) => setPage(data)}
            renderItem={(item) => (
              <PaginationItem
                slots={{ previous: prevArrow, next: nextArrow }}
                {...item}
              />
            )}
          />
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Footer;
