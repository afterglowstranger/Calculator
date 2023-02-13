namespace CalculatorTest.Models
{
    public class SimpleCalculator :ISimpleCalculator
    {
        
        
        
        public SimpleCalculator() { }

        public int Add(int start, int amount) {
            return start + amount;
        }

        public int Subtract(int start, int amount)
        {
            return start - amount;
        }

    }
}
