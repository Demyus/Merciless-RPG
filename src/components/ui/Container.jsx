// Container that envelops the content
// props.fluid : if the container is full width(fluid) or set size
// props.classes : extra clasess to be added to the card
// props.styles : extra styles to be added to the card


const Container = (props) => {
    const containerType = props.fluid ? 'container-fluid' : 'container';
    const extraClasses = props.classes ? props.classes : '';
    const containerclasses = containerType + ' ' + extraClasses;

  return (    
        <div className={ containerclasses  } style={props.styles && props.styles}>
            {props.children}
        </div>    
  ) 
};

export default Container;