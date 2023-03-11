import { useEffect, useState } from "react";
import "./style.scss";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider, useDispatch, useSelector } from "react-redux";
import { data } from "../../data";
import classNames from "classnames";
type DataType = typeof data.destinations;
type StateData = {
    tab: {
        currentTab: 0;
        data: DataType;
    };
};
const tab = createSlice({
    initialState: {
        currentTab: 0,
        data: data.destinations,
    },
    reducers: {
        setTab(state, action: { payload: number }) {
            state.currentTab = action.payload;
        },
    },
    name: "tab",
});
const store = configureStore({
    reducer: {
        tab: tab.reducer,
        data: tab.reducer,
    },
});
function TabsManger() {
    const dispatch = useDispatch();
    const data = useSelector<StateData, DataType>((state) => state.tab.data);
    const curTab = useSelector<StateData, number>(
        (state) => state.tab.currentTab
    );
    return (
        <ul className="tabs-controller">
            {data.map(({ name }, i) => {
                return (
                    <li
                        className={classNames({
                            active: i == curTab,
                        })}
                        key={i}
                        onClick={() => dispatch(tab.actions.setTab(i))}
                    >
                        {name}
                    </li>
                );
            })}
        </ul>
    );
}
function ImagePlanetViewer() {
    const data = useSelector<StateData, DataType>((state) => state.tab.data);
    const curTab = useSelector<StateData, number>(
        (state) => state.tab.currentTab
    );
    return (
        <div className="planet-viewer">
            {data.map(({ name, images }, i) => {
                return (
                    <img
                        src={images.png}
                        className={classNames({ active: curTab == i })}
                        alt={name}
                    />
                );
            })}
        </div>
    );
}
function InfoContent() {
    const data = useSelector<StateData, DataType>((state) => state.tab.data);
    const curTab = useSelector<StateData, number>(
        (state) => state.tab.currentTab
    );
    return (
        <ul className="info-container">
            {data.map(({ name, description, distance, travel }, i) => {
                return (
                    <li className={classNames({ active: curTab == i })}>
                        <div>
                            <h2 className="tw-uppercase tw-mb-4 tw-break-words">
                                {name}
                            </h2>
                            <p className="tw-text-white-purple tw-leading-7">
                                {description}
                            </p>
                        </div>
                        <div className="tw-flex tw-flex-col sm:tw-flex-row tw-gap-8 tw-justify-around lg:tw-justify-start tw-tracking-[0.13rem] tw-items-center tw-mt-10">
                            <div>
                                <p className="tw-text-white-purple">
                                    AVG. DISTANCE
                                </p>
                                <p className="tw-uppercase tw-text-4xl tw-my-3">
                                    {distance}
                                </p>
                            </div>
                            <div>
                                <p className="tw-text-white-purple">
                                    Est. travel time
                                </p>
                                <p className="tw-uppercase tw-text-4xl tw-my-3">
                                    {travel}
                                </p>
                            </div>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}
export default function Destination() {
    useEffect(() => {
        const body = document.getElementsByTagName("body")[0];
        body.className = "destination";
    }, []);
    return (
        <Provider store={store}>
            <div className="destination container tw-py-20 tw-flex-1 sm:tw-text-xl tw-flex lg:tw-items-center">
                <div className="lg:tw-flex tw-justify-between tw-flex-1 tw-gap-16">
                    <div className="tw-flex-shrink-0">
                        <p className="tw-uppercase tw-tracking-[0.16rem] tw-text-center sm:tw-text-start">
                            <span className="tw-opacity-50  tw-font-bold tw-text-lg tw-mix-blend-normal tw-mr-3">
                                01
                            </span>
                            Pick your destination
                        </p>
                        <ImagePlanetViewer />
                    </div>
                    <div>
                        <TabsManger />
                        <InfoContent />
                    </div>
                </div>
            </div>
        </Provider>
    );
}
