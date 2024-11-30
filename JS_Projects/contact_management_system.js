const prompt = require("prompt-sync")()
const contacts = []

function getInfo() {
    console.log("-------------------------------")
    console.log("1. Add a Contact")
    console.log("2. View all Contacts")
    console.log("3. Delete a Contact")
    console.log("4. Search a Contact")
    console.log("5. Exit")
}

function addContact() {
    const name = prompt("Enter Name: ")
    const email = prompt("Enter email: ")
    const contact = {
        name: name,
        email: email
    }
    contacts.push(contact)
    console.log("Contact Added!")
}
function deleteContact() {
    for (let i = 0; i < contacts.length; i++) {
        const contact = contacts[i];
        console.log((i+1).toString() + ". " + contact.name)
    }
    while (true) {
        const contactToDelete = parseInt(prompt("Which contact you want to delete ? "));
        if (1 <= contactToDelete && contactToDelete <= contacts.length) {
            const deleteContact = contacts[contactToDelete-1];
            console.log("Name:", deleteContact.name, ", Email:", deleteContact.email)
            if (prompt("Confirm \"y\" to delete ").toLowerCase() == "y") {
                contacts.splice(contactToDelete-1, 1)
                console.log("Contact Deleted!")
                break;
            }
            else break;
        } 
        else {
            console.log("Invalid Input! Try Again")
            if (prompt("Press \"q\" to exit else anything to try again ").toLowerCase() == 'q') break;
        }
    }
}
function searchContact() {
    while (true) {
        const type = prompt("Search by \"name\" or \"email\" ? ").toLowerCase()
        if (type == "name") {
            const nameToSearch = prompt("Enter the name: ");
            for (let i = 0; i < contacts.length; i++) {
                if (nameToSearch == contacts[i].name) {
                    console.log("Contact Found:", contacts[i].name, " &", contacts[i].email);
                    break;
                }
                else {
                    console.log("No contact Found with name " + "\"" + nameToSearch + "\"")
                    if (prompt("Press \"p\" to search again or anything to Quit").toLowerCase() == 'p') continue;
                    else break;
                }
            }
        }
        else if (type == "email") {
            const emailToSearch = prompt("Enter the email: ");
            for (let i = 0; i < contacts.length; i++) {
                if (emailToSearch == contacts[i].email) {
                    console.log("Contact Found:", contacts[i].name, " &", contacts[i].email);
                    break;
                }
                else {
                    console.log("No contact Found with email " + "\"" + emailToSearch + "\"")
                    if (prompt("Press \"p\" to search again or anything to Quit ").toLowerCase() == 'p') continue;
                    else break;
                }
            }
        }
        else {
            console.log("Invalid Input!")
            if (prompt("Press \"q\" to exit or anything else to continue: ").toLowerCase() == 'q') break;
        }
        if (prompt("Want to quit ? Press \"q\" or anything Search again") == 'q') return;
    }
}
function viewAllContact(contacts) {
    if (contacts.length == 0) console.log("No Contacts Available yet! Add them")
    for (let contact of contacts) {
        console.log("Name:", contact.name, ", Email:", contact.email);
    }
}

let run = true
console.log("Contact Management System")
while (run) {
    getInfo()
    const number = prompt("Enter an operation (1 - 5): ")
    switch (number) {
        case "1":
            addContact()
            break;
        case "2":
            viewAllContact(contacts)
            break;
        case "3":
            deleteContact()
            break;
        case "4":
            searchContact()
            break;
        case "5":
            console.log("Thank you for using Our app!")
            run = false
            break;

        default:
            console.log("Invalid Case")
    }
}