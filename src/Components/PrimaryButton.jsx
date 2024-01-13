import PropTypes from 'prop-types';

const PrimaryButton = ({children}) => {
    return (
        <>
           <button className="inline-flex flex-nowrap items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] h-10 px-4 py-2  text-white">
                {children}
              </button> 
        </>
    );
};

PrimaryButton.propTypes={
    children:PropTypes.node
}

export default PrimaryButton;