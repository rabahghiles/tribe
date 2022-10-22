import './calcul.scss';

export const calculsum = (x,y) => {
    if (isNaN(x) || isNaN(y) || x.length === 0 || y.length === 0 ) return 'Parameter is not a number!';
    else return parseFloat(x) +  parseFloat(y);
}

const Calcul = () => {
    return (
        <div className='calcul'>
            {calculsum(2,2)}
        </div>
    )
}

export default Calcul;