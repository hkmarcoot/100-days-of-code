import AttendingEventJointUser from "./attendingEventJoinUser";
import{screen,render,fireEvent} from "@testing-library/react";


it('check if the button on event join working and render',()=>{
    render(<AttendingEventJointUser/>)
    
    const AttendingEventJointSection = screen.getByRole("button", {name:"Attend Event"})

    // const AttendingEventJointButton = screen.getByRole("button")

    fireEvent.click(AttendingEventJointSection)

    const divElement=screen.getByText("Going")
     expect(AttendingEventJointSection).toBeInTheDocument();
      expect(divElement).toBeInTheDocument();

    //testing for class
    expect(AttendingEventJointSection).toHaveClass('attendingEventJoin')
})