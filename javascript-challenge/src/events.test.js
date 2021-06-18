const { moveEventToDay, groupEventsByDay } = require('./events.js');

/**
 TESTS

 [X] TEST TO SEE IF IT RETURNS AN OBJECT
 [X] TEST TO SEE IF IT RETURNS AN OBJECT WITH DATE DIFFERENCE AS KEY
 [X] TEST IT STORES MULTIPLE EVENTS IN THE SAME KEY
 [X] TEST FOR ERROR IF DATA IS FORMATTED INCORRECTLY

 */

/**
  TEST DATA
  */

const multipleEventsInput = [
  {
    id: 5676,
    startsAt: '2021-01-29T13:01:11Z',
    endsAt: '2021-01-27T15:01:11Z',
    title: 'Daily walk',
  },
  {
    id: 106,
    startsAt: '2021-01-27T13:01:11Z',
    endsAt: '2021-01-27T15:01:11Z',
    title: 'Daily walk',
  },
  {
    id: 156,
    startsAt: '2021-01-27T17:01:11Z',
    endsAt: '2021-01-27T22:01:11Z',
    title: 'Dinner',
  },
  {
    id: 205,
    startsAt: '2021-01-28T17:01:11Z',
    endsAt: '2021-01-27T22:01:11Z',
    title: 'Dinner',
  },
  {
    id: 111111,
    startsAt: '2021-01-28T17:01:11Z',
    endsAt: '2021-01-27T22:01:11Z',
    title: 'Dinner',
  },
  {
    id: 209,
    startsAt: '2021-01-28T17:01:11Z',
    endsAt: '2021-01-27T22:01:11Z',
    title: 'Dinner',
  },
];

const multipleEventsOutput = {
  0: [
    {
      id: 106,
      startsAt: '2021-01-27T13:01:11Z',
      endsAt: '2021-01-27T15:01:11Z',
      title: 'Daily walk',
    },
    {
      id: 156,
      startsAt: '2021-01-27T17:01:11Z',
      endsAt: '2021-01-27T22:01:11Z',
      title: 'Dinner',
    },
  ],
  1: [
    {
      id: 205,
      startsAt: '2021-01-28T17:01:11Z',
      endsAt: '2021-01-27T22:01:11Z',
      title: 'Dinner',
    },
    {
      id: 111111,
      startsAt: '2021-01-28T17:01:11Z',
      endsAt: '2021-01-27T22:01:11Z',
      title: 'Dinner',
    },
    {
      id: 209,
      startsAt: '2021-01-28T17:01:11Z',
      endsAt: '2021-01-27T22:01:11Z',
      title: 'Dinner',
    },
  ],
  2: [
    {
      id: 5676,
      startsAt: '2021-01-29T13:01:11Z',
      endsAt: '2021-01-27T15:01:11Z',
      title: 'Daily walk',
    },
  ],
};

const simpleInput = [
  {
    id: 106,
    startsAt: '2021-01-27T13:01:11Z',
    endsAt: '2021-01-27T15:01:11Z',
    title: 'Daily walk',
  },
];

const simpleOutput = {
  0: [
    {
      id: 106,
      startsAt: '2021-01-27T13:01:11Z',
      endsAt: '2021-01-27T15:01:11Z',
      title: 'Daily walk',
    },
  ],
};

describe('groupEventsByDay', () => {
  it('returns an object when passed an array', () => {
    expect(typeof groupEventsByDay(['testing'])).toBe('object');
  });
  it('stores single event on single key', () => {
    expect(groupEventsByDay(simpleInput)).toMatchObject(simpleOutput);
  });
  it('stores multiple events on the same day in a single key', () => {
    expect(groupEventsByDay(multipleEventsInput)).toMatchObject(
      multipleEventsOutput,
    );
  });
  it('throws error when event data is invalid', () => {
    expect(groupEventsByDay('hello')).toThrow(Error);
  });
});

describe('moveEventToDay', () => {
  it('returns an object when passed an object', () => {
    expect(
      typeof moveEventToDay(
        {
          0: [
            {
              id: 106,
              startsAt: '2021-01-27T13:01:11Z',
              endsAt: '2021-01-27T15:01:11Z',
              title: 'Daily walk',
            },
          ],
          2: [
            {
              id: 5676,
              startsAt: '2021-01-29T13:01:11Z',
              endsAt: '2021-01-29T15:01:11Z',
              title: 'Daily walk',
            },
          ],
        },
        5676,
        3,
      ),
    ).toBe('object');
  });
});
