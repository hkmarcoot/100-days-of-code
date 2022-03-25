import AttendingEventPageUser from "./AttendingEventPageUser";
import{screen,render} from "@testing-library/react";




it('check if the HeroEventUserMock section working and render',()=>{
    render(<AttendingEventPageUser DataToRender={[]}/>)

    const AttendingEventSection = screen.getByTestId("attenidngSectionContainer")

     expect(AttendingEventSection).toBeInTheDocument();

    //testing for class
    expect(AttendingEventSection).toHaveClass('attendingSectionContainer')
})