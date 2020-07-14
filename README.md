This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Usage

Run `yarn start` to start a development server and see an interactive example.

The email input component can be found in `src/EmailInput`. See `src/App.tsx`
for a usage example.

## Decision-Making

I didn't put any care into fine-tuning the performance of this code. I expect
that only one or two instances of this component are likely to be rendered at
any given time so clarity and simplicity are more important. Hypothetically,
`React.memo` and `useCallback` could be used to optimize performance.

It wasn't clear to me whether it should be possible to delete the last entered
address by pressing backspace, in addition to by pressing the "X" button. It was
simple to implement so I put it in.

I tried to choose an email validation system which is relatively permissive
because falsey flagging a valid address seems like a bad experience to me.

## Further Improvements

It might be nice to automatically focus the input after removing an address by
clicking the "X" button, but I'm not entirely sure this is desirable so I opted
to not implement this.

De-focusing the input field while there's text in it should probably commit the
current input text as an address, but once again I'm unsure if this is desirable.

There are likely some accessibility optimizations that could be made.
