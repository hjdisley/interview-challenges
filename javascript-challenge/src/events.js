/**
  An event could look like this:
  ```
  {
    id: 107,
    startsAt: '2021-01-27T13:01:11Z', 
    endsAt: '2021-01-27T15:01:11Z', 
    title: 'Daily walk',
  }
  ```
*/

/** 
  Take an array of events and return an object that is a  mapping from the 'day' to the events occuring on that day.
  The keys should be the day-difference to the earliest occuring event.
  Each days events should be sorted in ascending order of startsAt

  A result could look like:
  ```
  {
    0: [
      { id: 106, startsAt: '2021-01-27T13:01:11Z',  endsAt: '2021-01-27T15:01:11Z',  title: 'Daily walk' },
      { id: 156, startsAt: '2021-01-27T17:01:11Z',  endsAt: '2021-01-27T22:01:11Z',  title: 'Dinner' },
    ],
    2: [
      { id: 5676, startsAt: '2021-01-29T13:01:11Z',  endsAt: '2021-01-27T15:01:11Z',  title: 'Daily walk' },
    ]
  }
 ```

 Your solution should not modify any of the function arguments
*/

/**
 SOLUTION

 [X] CHECK IF INPUT IS AN ARRAY
 [X] SORT EVENTS ARRAY EARLIEST TO LATEST
 [X] TAKE THE EARLIEST EVENT AND INITIALISE THE RESULT OBJECT WITH THAT AS THE FIRST KEY
 [X] FOR EACH REMAINING EVEN GET ITS DATE DIFFERENCE
 [X] IF THE DATE DIFFERENCE DOESNT EXIST IN THE OBJECT START A NEW ARRAY WITH DATE DIFFERENCE AS THE KEY
 [X] PUSH THAT EVENT INTO THE NEWLY INITIALISED ARRAY
 [X] OTHERWISE PUSH THE EVENT INTO THE ARRAY WHERE DATE DIFFERENCE DOES EXIST

 */

const differenceInDays = require('date-fns/differenceInDays');

const groupEventsByDay = (events) => {
  if (!Array.isArray(events)) {
    throw new Error('Data is formatted incorrectly!');
  }

  const eventsCopy = [...events];

  const sortedData = eventsCopy.sort(
    (a, b) => new Date(a.startsAt) - new Date(b.startsAt),
  );

  const earliestDate = sortedData.splice(0, 1);

  const resultObj = {
    0: earliestDate,
  };

  sortedData.forEach((event) => {
    const dateDifference = differenceInDays(
      new Date(event.startsAt),
      new Date(resultObj['0'][0].startsAt),
    );

    if (!resultObj[dateDifference]) {
      resultObj[dateDifference] = [];
      resultObj[dateDifference].push(event);
    } else {
      resultObj[dateDifference].push(event);
    }
  });
  return resultObj;
};

/** 
  Adjust the start and end date of an event so it maintains its total duration, but is moved `toDay`.
  `eventsByDay` should be the same as the return value of `groupEventsByDay`
  `id` will be the event that should be moved
  `toDay` will be a number that indicates the key of `eventsByDay` that the target event should be moved to

  Example:
  ```S
  eventsByDay(
    {
      0: [
        { id: 106, startsAt: '2021-01-27T13:01:11Z',  endsAt: '2021-01-27T15:01:11Z',  title: 'Daily walk' },      
      ],
      2: [
        { id: 5676, startsAt: '2021-01-29T13:01:11Z',  endsAt: '2021-01-29T15:01:11Z',  title: 'Daily walk' },
      ]
    },
    5676,
    3,
  )
  ```
  Should return something like 
  ```
  {
    0: [
      { id: 106, startsAt: '2021-01-27T13:01:11Z',  endsAt: '2021-01-27T15:01:11Z',  title: 'Daily walk' },      
    ],
    3: [
      { id: 5676, startsAt: '2021-01-30T13:01:11Z',  endsAt: '2021-01-30T15:01:11Z',  title: 'Daily walk' },
    ]
  },
  ```

  Your solution should not modify any of the function arguments
*/

/**



*/

const moment = require('moment');

const moveEventToDay = (eventsByDay, id, toDay) => {
  const eventsCopy = { ...eventsByDay };

  Object.keys(eventsCopy).forEach((key) => {
    const eventToChange = eventsCopy[key].filter((event) => event.id == id);
    const otherEvents = Array.from(
      eventsCopy[key].filter((event) => event.id !== id),
    );

    if (eventToChange.length) {
      const dateDifference = toDay - key;
      const startingDate = eventToChange[0].startsAt;
      const changedEvent = {
        id: eventsCopy[key].id,
        startsAt: new Date(moment(startingDate).add(dateDifference, 'days')),
        endsAt: new Date(moment(startingDate).add(dateDifference, 'days')),
        title: eventsCopy[key].title,
      };
      const changedEventObject = {
        ...otherEvents,
        changedEvent,
      };

      if (eventsCopy[toDay]) {
        eventsCopy[toDay].push(changedEventObject);
      } else {
        [eventsCopy[toDay]];
      }
    }
  });
  console.log(changedEventObject);
  return eventsCopy;
};

module.exports = { groupEventsByDay, moveEventToDay };
