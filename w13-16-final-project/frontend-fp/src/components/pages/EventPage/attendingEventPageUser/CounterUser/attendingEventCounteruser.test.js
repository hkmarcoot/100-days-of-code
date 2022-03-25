import AttendingEventCounterUser from "./attendingEventCounterUser";
import{screen,render} from "@testing-library/react";




it('check if the HeroEventUserMock section working and render',()=>{
    render(<AttendingEventCounterUser dataAttend={5}/>)
    const DataAttend = screen.getByText(5);
    const AttendingEventCounterSection = screen.getByTestId("attendingEventCounterUserTesting")

     expect(AttendingEventCounterSection).toBeInTheDocument();
     expect(DataAttend).toBeInTheDocument();

    //testing for class
    expect(AttendingEventCounterSection).toHaveClass('attendingEventCounter')
})