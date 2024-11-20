function App() {
    const [amount, setAmount] = useState(0);
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("inr");
    const [convertedAmount, setConvertedAmount] = useState(0);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
  
    const currencyInfo = useCurrencyHook(from);
  
    const options = currencyInfo ? Object.keys(currencyInfo) : [];
  
    const swap = () => {
      setFrom(to);
      setTo(from);
      setConvertedAmount(amount);
      setAmount(convertedAmount);
    };
  
    const convert = () => {
      if (!currencyInfo || isNaN(amount)) {
        setError('Invalid currency data or amount');
        return;
      }
      setConvertedAmount(amount * currencyInfo[to]);
      setError(null); // Clear error after successful conversion
    };
  
    return (
      <div>
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}>
          {/* Input boxes and other UI components */}
        </form>
      </div>
    );
  }
  