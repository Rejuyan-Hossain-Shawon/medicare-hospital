import React from 'react';
import { Accordion } from 'react-bootstrap';

const HealthGuideLine = () => {
    return (
        <div>
            <h1 className="text-info">5 Tips to keep Healthy Yourself!!!</h1>
            <Accordion className="w-50 mx-auto my-5 pb-5">
                <Accordion.Item eventKey="0">
                    <Accordion.Header >Focus on whole foods</Accordion.Header>
                    <Accordion.Body>
                        Fruits, vegetables, whole grains, lean proteins, beans, nuts and legumes are all healthy choices. Bonus: A healthy diet is an immune system booster. Learn to recognize when you’re eating in response to stress, despite not actually being hungry.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Think before you drink (or eat)</Accordion.Header>
                    <Accordion.Body>
                        Pause for 15 minutes to think about what you’re really craving, and whether you’re using food to comfort yourself. Limiting your alcohol intake will help you avoid empty calories as well as the health risks associated with binge drinking. Also, trying drinking some water — we often mistake thirst for hunger.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Snack wisely</Accordion.Header>
                    <Accordion.Body>
                        Keep your refrigerator and pantry stocked with wholesome, nutritious foods instead of processed snacks that are high in sugar, sodium or fat.
                        “Eating fruits and vegetables throughout the day helps prevent you from overeating,” Dr. Onishi says. “When dinnertime rolls around, you’re not as hungry as you would have been if you hadn’t taken in those calories.”
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Don’t starve yourself</Accordion.Header>
                    <Accordion.Body>
                        “If you let yourself get very hungry, you tend to make poor choices,” Dr. Onishi says.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>Find a fitness routine that works for you</Accordion.Header>
                    <Accordion.Body>
                        Walking, jogging, swimming, biking and surfing can all be done while respecting social distancing protocols. And the internet is filled with free or low-cost cardio, yoga and body-weight workout videos that can be done from the comfort of your own home.
                        “Even small amounts of physical activity do make a difference in your health,” Dr. Onishi says.
                        San Diego Health August 2020 Issue
                        This content appeared in San Diego Health, a publication in partnership between Scripps and San Diego Magazine that celebrates the healthy spirit of San Diego.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default HealthGuideLine;