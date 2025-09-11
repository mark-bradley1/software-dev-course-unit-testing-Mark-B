/*
1. Setup a Shared Codebase
○ For this assignment, your group will need to work in a shared fork of
the GitHub software-dev-course-unit-testing repo. That means a few
additional steps to give everyone access and make sure you are
merging coding successfully! You can find more information about
those steps below.
○ Make sure everyone in your group has access to the Github Repo,
which contains partially implemented methods (e.g.,
calculateDiscount, filterProducts, sortInventory).
2. Assign Roles
○ Assign roles within the group, such as:
■ Test Writer: Writes initial test cases.
■ Code Reviewer: Reviews and improves the test cases.
■ Debugger: Ensures the implementation passes all tests.
■ Presenter: Summarizes the group’s contributions for sharing
with the class.
3. Build out your Tests
○ Write Tests: Use Jest to write unit tests for each of the method(s).
■ Ensure they include positive, negative, and edge cases.
○ Collaborate: Share and discuss test ideas with your group, ensuring
all possible scenarios are covered.
○ Run Tests: Use npm test to execute the test suite and refine the
implementation as needed.
4. Present Your Tests, highlighting:
○ Key scenarios your group tested.
1
○ Challenges your team faced and how you resolved them.
○ Any interesting bugs uncovered during testing.
Setup
1. You will need to make sure you have Jest installed to complete this activity:
a. Create a project folder named product-inventory.
b. Initialize the project:
npm init -y
c. Install Jest:
npm install --save-dev jest
d. Add a test script to package.json:
"scripts": {
 "test": "jest"
}
2. Make sure you follow all of these steps when you complete collaborative
work in our GitHub repos:
● Fork the repo.
● Go to the “Settings” menu and select “Collaborators”
○ GitHub may prompt you to authenticate your account.
○ Then, in the “Collaborators” menu, you can add your classmates,
using their GitHub handles.
● Clone the repository to your local machine on a branch named for
your role within the group.
● Start working on the code.
● When you are finished, commit your changes and push them to your
branch.
● Submit a pull request and ask a team member to review your work.
● Your groupmate will need to review the code and merge it.
You can view a video of this process here.
2
If you would like to read more information about Branching and Merging within
GitHub, you can do so here:
● Branching
● Merging
● Branching - Official GitHub Documentation
● Merging - Official GitHub Documentation
Please note: the first two links above assume the user is working on a Linux
Machine, although the commands will be the same, no matter your hardware.
Submission
1. Submit the url for your GitHub repo in the field below.
2. Plan to present your findings to the class.
*/


function calculateDiscount(price, discountRate) {
    if (typeof price !== 'number' || typeof discountRate !== 'number') return null;
    if (discountRate < 0 || discountRate > 1) return null;
    // TODO: Implement logic
    return price * (1- discountRate);
}

function filterProducts(products, callback) {
    if (!Array.isArray(products) || typeof callback !== 'function') return [];
    // TODO: Implement filtering logic

    return products.filter(callback);
}

function sortInventory(inventory, key) {
    if (!Array.isArray(inventory) || typeof key !== 'string') return [];
    // TODO: Implement sorting logic

    return inventory.sort((a, b) => a.name.localeCompare(b.name));
}

//console.log(sortInventory(products, name));

module.exports = {
    filterProducts,
    calculateDiscount,
    sortInventory
}