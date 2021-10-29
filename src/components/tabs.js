import topics from '../mocks/data.js';
console.log(topics);

const Tabs = (topics) => {
  const topicsDiv = document.createElement('div');
  const tabDiv1 = document.createElement('div');
  const tabDiv2 = document.createElement('div');
  const tabDiv3 = document.createElement('div');

  topicsDiv.classList.add('topics');
  tabDiv1.classList.add('tab');
  tabDiv2.classList.add('tab');
  tabDiv3.classList.add('tab');

  topics.forEach()

  tabDiv1.textContent = 'javascript';
  tabDiv2.textContent = 'bootstrap';
  tabDiv3.textContent = 'technology';

  topicsDiv.appendChild(tabDiv1);
  topicsDiv.appendChild(tabDiv2);
  topicsDiv.appendChild(tabDiv3);


  return topicsDiv;

  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
}

export { Tabs, tabsAppender }
