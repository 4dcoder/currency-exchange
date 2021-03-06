import React, { PropTypes } from 'react';

const { string } = PropTypes;

const CurrencySymbol = ({ ticker }) => (
    <span className="currency-symbol">
        {ticker.replace('BTC-', '')}
    </span>
);

CurrencySymbol.displayName = 'CurrencySymbol';

CurrencySymbol.propTypes = {
    ticker: string.isRequired
};

export default CurrencySymbol;
