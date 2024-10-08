import './PlanCard.css';
import PlaceholderImage from '../../../../../assets/images/placeholder_image.png';

const PlanCard = ({ product, handleContinue, popular = false, info }) => {

    const getButtonText = () => {
        if (!info?.status) {
            return `Go ${product.name}`;
        }
        else if (info.amount > product.price) {
            return 'Downgrade';
        }
        else {
            return 'Upgrade';
        }
    };

    return (
        <div className={`plan-card-container ${popular ? 'popular-plan-card-container' : ''}`}>
            {popular &&
                <div className='popular-div'>MOST POPULAR</div>
            }
            <div className={`plan-card`}>
                <img src={product.image ? product.image : PlaceholderImage} className='img' alt='plan-image' />
                <div className='title'>{product.name}</div>
                <div className='description'>
                    {product.description}
                </div>
                <div className='price-container'>
                    <div className='price'>{product.currency.toUpperCase()} {product.price}</div>
                    <div className='duration'>/mo.</div>
                </div>
                <div className='btn-container'>
                    {info?.productId !== product.productId &&
                        <button
                            className={`btn ${popular ? "popular-btn" : "non-popular-btn"}`}
                            onClick={() => handleContinue(product.priceId)}
                        >
                            {getButtonText()}
                        </button>
                    }
                </div>
            </div>
        </div>
    )
};

export default PlanCard;