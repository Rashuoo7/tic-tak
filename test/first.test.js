// query utilities:
import {
    getByLabelText,
    getByText,
    getByTestId,
    queryByTestId,
    waitFor,
} from '@testing-library/dom'
import index from "../js/index";
import createBoard from "../js/createBoard";


test('test board', async () => {
    const container = index()
    console.log(container)
    // Get form elements by their label text.
    // An error will be thrown if one cannot be found (accessibility FTW!)
    const input = getByLabelText(container, 'Username')


    // Get elements by their text, just like a real user does.
    getByText(container, 'Print Username').click()

    await waitFor(() =>
        expect(queryByTestId(container, 'printed-username')).toBeTruthy(),
    )
})


function getExampleDOM() {
    // This is just a raw example of setting up some DOM
    // that we can interact with. Swap this with your UI
    // framework of choice 😉
    const div = document.createElement('div')
    div.innerHTML = `
    <label for="username">Username</label>
    <input id="username" />
    <button>Print Username</button>
  `
    const button = div.querySelector('button')
    const input = div.querySelector('input')
    button.addEventListener('click', () => {
        // let's pretend this is making a server request, so it's async
        // (you'd want to mock this imaginary request in your unit tests)...
        setTimeout(() => {
            const printedUsernameContainer = document.createElement('div')
            printedUsernameContainer.innerHTML = `
        <div data-testid="printed-username">${input.value}</div>
      `
            div.appendChild(printedUsernameContainer)
        }, Math.floor(Math.random() * 200))
    })
    return div
}

test('examples of some things', async () => {
    const famousProgrammerInHistory = 'Ada Lovelace'
    const container = getExampleDOM()

    // Get form elements by their label text.
    // An error will be thrown if one cannot be found (accessibility FTW!)
    const input = getByLabelText(container, 'Username')
    input.value = famousProgrammerInHistory

    // Get elements by their text, just like a real user does.
    getByText(container, 'Print Username').click()

    await waitFor(() =>
        expect(queryByTestId(container, 'printed-username')).toBeTruthy(),
    )
})