import React from 'react';
import {shallow} from "enzyme";
import config from "../help";
import App,{ increment,decrement } from "../App.jsx";

describe("testing app",()=>{
    it('counter initial value',()=>{
        const div=shallow(<App debug/>);
        expect(div.state().counter).toEqual(0);
    });
    it('check increment',()=>{
        const wrapper=shallow(<App/>);
        wrapper.setState({counter:0})
        wrapper.find('button').at(0).simulate('click');
        expect(wrapper.state().counter).toEqual(1);
    });
    it('check decrement',()=>{
        const wrapper=shallow(<App/>);
        wrapper.find('button').at(1).simulate('click');
        expect(wrapper.state().counter).toEqual(-1);
    });
    it('div length',()=>{
        const wrapper=shallow(<App/>);
        expect(wrapper.find('div')).toHaveLength(1);
    })
})