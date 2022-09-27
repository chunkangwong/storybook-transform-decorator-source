import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import Counter from "./Counter";

const mockedState = 0;

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

const Template = (args) => <Counter {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "",
};
