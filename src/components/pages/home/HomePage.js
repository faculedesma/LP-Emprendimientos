import React from 'react';
import Layout from '../../layout/Layout';
import { Input, Select, Cascader } from 'antd';

const InputGroup = Input.Group;
const Option = Select.Option;

const options = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}];

const Home = () => {
  return(
    <Layout>
      <div  className="home-page">
        <h2>Bienvenido</h2>
        <p>Eliga la obra</p>
        <InputGroup compact>
            <Select style={{ width: '30%' }} defaultValue="Home">
              <Option value="Home">Home</Option>
              <Option value="Company">Company</Option>
            </Select>
            <Cascader style={{ width: '70%' }} options={options} placeholder="Select Address" />
        </InputGroup>
      </div>
    </Layout>
  )
};

export default Home;