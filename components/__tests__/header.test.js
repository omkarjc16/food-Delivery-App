import { render, screen } from "@testing-library/react"
import Header from "../header"
import { Provider } from "react-redux"
import AppStore from "../../Redux/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"



it("should render the header with contactuspage",()=>{
    render(
    <BrowserRouter>
    <Provider store={AppStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
)
const contact =screen.getByText("Contact")
expect(contact).toBeInTheDocument()

})