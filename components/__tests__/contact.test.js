import { render,screen } from "@testing-library/react"
import Contact from "../contactus"
import "@testing-library/jest-dom"

describe('contact Us page Test Cases', () => { 
    it('should heading render', () => { 
        render(<Contact/>)
        const heading =screen.getByRole("heading");
        expect(heading).toBeInTheDocument()
     })
    
     test('should button render', () => { 
        render(<Contact/>)
        const button =screen.getByRole("button");
        expect(button).toBeInTheDocument()
     })
    
     test('should input render', () => { 
        render(<Contact/>)
        const inputName =screen.getByPlaceholderText("Name");
        expect(inputName).toBeInTheDocument()
     })
    
     test('should contains 2 input boxes render', () => { 
        render(<Contact/>)
        const inputBoxs =screen.getAllByRole("textbox");
        //Assertion
        expect(inputBoxs.length).toBe(3);
     })
 })