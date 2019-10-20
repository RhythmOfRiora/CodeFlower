import React from 'react';
import CodeFlower from '../CodeFlower'



class CodeFlowerComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = { codeflower : null};
    }

    componentDidMount() {
          var json = {'name': 'root', 'children': [{'name': 'example1',  'size': 500}, {'name': 'example2',  'size': 500},
           {'name': 'example3',  'size': 500}, {'name': 'example4', 'size': 500},
           {'name': 'example5', 'children': [{'name': 'child1', 'size': 250}, {'name': 'child2', 'size': 250},
                                             {'name': 'child3', 'size': 250}], 'size': 500}, {'name': 'child4',  'size': 500},
                                             {'name': 'child5',  'size': 500}], 'optionalExtraParam': 81, 'size': 8778};
          var myFlower = new CodeFlower("#visualization", 1000, 1000);
          this.setState({codeflower:myFlower}, () => {this.state.codeflower.update(json)});
    };



    render() {
        return (

             <div id="visualization"></div>

         );
    }}

    export default CodeFlowerComponent;



