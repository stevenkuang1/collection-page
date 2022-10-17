# Collection Page Application

## Steps for Starting Application

1. `npm install`
2. `npm start`
3. View on `http://localhost:3000/` (recommended to view on Chrome and I done my testing and developing on it. But other browsers should be fine)

## Libraries Used

REQUIRED TO USE :

- [react](https://reactjs.org/)
- [typescript](https://www.typescriptlang.org/)
- [styled-components](https://styled-components.com/)

---

ADDITIONAL LIBRARIES:

- [axios](https://github.com/axios/axios)
- [moment](https://momentjs.com/)
- [react-infinite-scroll-component](https://github.com/ankeetmaini/react-infinite-scroll-component)
- [react-scroll-to-top](https://github.com/HermanNygaard/react-scroll-to-top)
- [react-social-icons](https://github.com/jaketrent/react-social-icons)

## Considerations/Decisions:

- Took inspiration from [OpenSea](opensea.io) and [Joepegs](https://joepegs.com/).

- Utilize documentation on [Joepegs Public API](https://joepegs.dev/api).

- Collection slug can be changed via `SLUG` in `src\components\helpers\constants.tsx`.

- There sometimes issues fetching images for the NFT Card, which can be addressed by pulling in the images individually instead of currently pulling 25 at once.

- Infinite Scrolling was implemented over Pagination. Pagination would have been more troublesome to implement as we don't know the total number of NFT fitting the filters until we get the final item. Endpoint to get the Items has a limited `PageSize` (0 - 100). There are some unusual behavior with this library though such that you may need to scroll to start it.

- Error checking occurs when we hit Joepegs API and response is not provided or times out.

- Took advantage of styled-components ability to reuse/edit defined elements. Setting all colors used under Theme allowing fast and easy color scheme changes.

- Handle page view for all devices from mobile to wide screen displays.

- Use [Color Palette Generator](https://coolors.co/) for color scheme used on Header/Footer and Collection Display.

- Easy access to top of page by use of button from Infinite Scrolling.

- [Prettier](https://prettier.io/) used to format code.
