import React, { Component } from "react";

import { Nav4 } from "../../components/Nav";
import Recipe from "../../components/Recipe";
import { Container, Col, Row } from "../../components/Grid";
import Footer from "../../components/Footer";
const axios = require("axios");


class SavedRecipePage extends Component {
    state = {
        recipes: [],
        q: ""
    };

    componentDidMount() {

    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    };

    getRecipes = () => {
        // console.log("clicked the button");
        axios
            .get("https://api.edamam.com/search?q=" + this.state.q + "&app_id=299349fb&app_key=1271d24b2a30960d770f228fa7a35422")
            // .then(results => console.log(results))
            .then(results => {
                results.data.hits.forEach(element => {
                    console.log(element.recipe.label);
                });
                // console.log(results.data.hits);
                JSON.stringify([results.data.hits]);
                this.setState({
                    recipes: results.data.hits
                })
                console.log("These: " + this.state.recipes);
            });
    }


    handleFormSubmit = event => {
        event.preventDefault();
        this.getRecipes();
    };


    render() {

        const { recipes } = this.state;

        return (
            <div>
                <Nav4 />
                <Container>
                    <Row>
                        <Col size="md-6 s10">
                            <Row>
                                <h1 class="display-1">Information</h1>
                            </Row>
                            <Row>
                                
                            </Row>
                        </Col>
                        <Col size="md-4 s11">
                            <div class="nutritionFact">

                            </div>
                        </Col>
                    </Row>
                </Container>
                <div class="foot fixed-bottom">
                    <Footer>
                    </Footer>
                </div>
            </div>
        );
    }
}



export default SavedRecipePage;