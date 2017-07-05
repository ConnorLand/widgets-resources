import { ShallowWrapper, shallow } from "enzyme";
import { DOM, createElement } from "react";

import { CarouselControl, CarouselControlProps } from "../CarouselControl";

describe("CarouselControl", () => {

    let carouselControl: ShallowWrapper<CarouselControlProps, any>;
    let onClickSpy: jasmine.Spy;

    beforeEach(() => {
        onClickSpy = jasmine.createSpy("onClick");
        carouselControl = shallow(createElement(CarouselControl, { direction: "right", onClick: onClickSpy }));
    });

    it("renders the structure correctly", () => {
        expect(carouselControl).toBeElement(
            DOM.div({ className: "widget-carousel-control right", onClick: onClickSpy },
                DOM.span({ className: "glyphicon glyphicon-chevron-right" })
            )
        );
    });

    describe("that navigates to the right", () => {
        beforeEach(() => {
            carouselControl = shallow(createElement(CarouselControl, { direction: "right" }));
        });

        it("renders the right css class", () => {
            expect(carouselControl).toHaveClass("right");
        });

        it("renders the correct glyphicon", () => {
            expect(carouselControl.find(".glyphicon.glyphicon-chevron-right").length).toBe(1);
        });
    });

    describe("that navigates to the left", () => {
        beforeEach(() => {
            carouselControl = shallow(createElement(CarouselControl, { direction: "left", onClick: onClickSpy }));
        });

        it("renders the left css class", () => {
            expect(carouselControl).toHaveClass("left");
        });

        it("renders the correct glyphicon", () => {
            expect(carouselControl.find(".glyphicon.glyphicon-chevron-left").length).toBe(1);
        });
    });

    it("responds to a single click", () => {
        carouselControl.simulate("click");

        expect(onClickSpy).toHaveBeenCalled();
    });
});