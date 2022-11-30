// Card Container that envelops the content
// props.classes : extra clasess to be added to the card
// props.styles : extra styles to be added to the card

const Card = (props) => {
    
    const extraClasses = props.classes ? props.classes : '';

    return (    
          <div className={"card card-body bg-light " + extraClasses } style={ props.styles && props.styles }>
              {props.children}
          </div>    
    ) 
  };
  
  export default Card;