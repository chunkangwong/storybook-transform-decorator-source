# Storybook.js: Get rid of unwanted decorator code in doc

This project aimed to demonstrate the use of `parameters.docs.transformSource` callback to get rid of the unnecessary source code of decorators from the `docs` section in Storybook.

```js
export default {
  title: "Counter",
  component: Counter,
  decorators: [
    (story) => (
      <>
        <div id="story-start"></div>
        {story()}
        <div id="story-end"></div>
      </>
    ),
    (story) => (
      <Provider
        store={configureStore({
          reducer: {
            count: createSlice({
              name: "count",
              initialState: mockedState,
              reducers: {
                increment(state) {
                  return state + 1;
                },
              },
            }).reducer,
          },
        })}
      >
        {story()}
      </Provider>
    ),
  ],
  parameters: {
    docs: {
      transformSource: (source) => {
        const regexRes = source.match(
          /<div id="story-start" \/>([\s\S]*?)<div id="story-end" \/>/
        );
        return regexRes ? regexRes[1] : source;
      },
    },
  },
};
```

## Setup

1. Run the following to install dependencies

```bash
npm install / yarn install
```

2. Run the following to launch Storybook

```bash
npm run storybook / yarn storybook
```
