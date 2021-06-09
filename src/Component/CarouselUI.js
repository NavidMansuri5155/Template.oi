import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { makeStyles } from '@material-ui/core/styles';
import { Carousel } from 'react-responsive-carousel';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingTop: "80px"
    },
    caro:{
        fontSize:"60px"
    },
    pera:{
        marginBottom:"10px",
        padding: theme.spacing(7),
        fontSize:"20px"
    },
    cor:{
        marginBottom:"20px"
    }

}));

function CarouselUI() {
    const classes = useStyles();

    return (
        <div>
            <div className="cor">
                <div class="carousel-wrapper">
                    <Carousel infiniteLoop useKeyboardArrows autoPlay>
                        <div>
                            <span className={classes.caro}>Handmade Wood Products</span>
                            <h4 className={classes.pera}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae nostrum, quos voluptas fugiat blanditiis, temporibus expedita cumque doloribus ea, officiis consequuntur repellat minus ad veritatis? Facere similique accusamus, accusantium sunt!</h4>
                        </div>
                        <div>
                            <span className={classes.caro}>Natural Materials</span>
                            <h4 className={classes.pera}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae nostrum, quos voluptas fugiat blanditiis, temporibus expedita cumque doloribus ea, officiis consequuntur repellat minus ad veritatis? Facere similique accusamus, accusantium sunt!</h4>
                        </div>
                        <div>
                            <span className={classes.caro}>Unique Design</span>
                            <h4 className={classes.pera}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae nostrum, quos voluptas fugiat blanditiis, temporibus expedita cumque doloribus ea, officiis consequuntur repellat minus ad veritatis? Facere similique accusamus, accusantium sunt!</h4>
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default CarouselUI;