// import { fireEvent, render, screen } from "@testing-library/react";
// import Main from "./Main"; // Import your Main component
// import ReserveForm from "./ReserveForm";

// describe("Reserve Form", () => {
//   test("handlerSubmit is not disabled if values are added", () => {
//     const handlerSubmit = jest.fn();

//     render(
//       <Main>
//         {(handlerChange, occasions, availableTimes) => (
//           <Reserve
//             form={{ date: "", guests: 2, time: "", occasion: "" }}
//             onChange={handlerChange}
//             occasions={occasions}
//             availableTimes={availableTimes}
//           >
//             <ReserveForm
//               form={{ date: "", guests: 2, time: "", occasion: "" }}
//               onChange={handlerChange} // Ensure that onChange is provided
//               occasions={occasions}
//               availableTimes={availableTimes}
//               handlerSubmit={handlerSubmit}
//             />
//           </Reserve>
//         )}
//       </Main>
//     );

//     const inputDate = screen.getByRole('textbox', { name: 'date' });
//     fireEvent.change(inputDate, { target: { value: "11/10/23" } });

//     const inputGuests = screen.getByRole('textbox', { name: 'guests' });
//     fireEvent.change(inputGuests, { target: { value: "4" } });

//     const submitButton = screen.getByRole("button");
//     fireEvent.click(submitButton);

//     expect(handlerSubmit).toHaveBeenCalled();
//   });
// });



import { fireEvent, render, screen } from "@testing-library/react";
import ReserveForm from "./ReserveForm";

describe("Reserve Form", () => {
  test("handlerSubmit is not disabled if values are added", () => {
    const handlerSubmit = jest.fn();
    const handlerChange = jest.fn(); // Define a mock handlerChange function

    render(
      <ReserveForm
        form={{ date: "", guests: 2, time: "", occasion: "" }}
        onChange={handlerChange}
        occasions={["Birthday", "Anniversary", "Proposal",]} // Define your occasions array here
        availableTimes={["17:00","18:00","19:00","20:00","21:00",]} // Define your availableTimes array here
        handlerSubmit={handlerSubmit}
      />
    );

    const inputDate = screen.getByLabelText("Reservation Date");;
    fireEvent.change(inputDate, { target: { value: "11/10/23" } });

    const inputGuests = screen.getByLabelText("Guests");
    fireEvent.change(inputGuests, { target: { value: "4" } });

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    expect(handlerChange).toHaveBeenCalled(); // Ensure that handlerChange was called
    expect(handlerSubmit).toHaveBeenCalled();
  });
});

