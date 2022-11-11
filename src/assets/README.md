######Development Team: Brandon Gustrowsky, Samuel Rivera, Esther Peden
######Class: CPTR-456 Advanced Web Programming
######Date: 11/11/2022
######Description of last edit: 
    Finished up styling of the cart. Two videos are displayed per line until a certain point now (check media queries).



###------Dependencies-----

- We chose to use the React component library [Material UI](https://mui.com/) (MUI). Our reasons were these:
    1) We utilized MUI's default styling on certain components and their wide variety of icons.
    2) Transitioning from desktop to mobile layous was made almost seamless. 
        In most cases, a flexbox was added to the parent element, and the MUI components
        seamlessely displayed and wrapped properly depending on the viewport size.
    3) We could set a theme and then use those colors whenever using an MUI component. This way,
        we could perform inline styling to MUI components without having to copy and paste colors.
        It also gave us the ability to set default styling and override styling for certain MUI 
        components.
    4) It introduced us to how MUI works and when to use it. Since the library is requried for the final Advanced Web Programming project, it has been great to get a jump on learning the library.

- We used the [Videostar](https://videostar.dacoder.io/api) API to populate the site with data.