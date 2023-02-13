using CalculatorTest.Models;
using static CalculatorTest.Models.SimpleCalculator;

namespace SimpleCalculatorTest
{
    public class Tests
    {
        [SetUp]
        public void Setup()
        {
        }

        [Test]
        public void Test1()
        {
            Assert.Pass();
        }

        [Test]
        public void Add_0Plus0_0() {
            //Arrange
            var calc = new SimpleCalculator();
            var start = 0;
            var amount = 0;

            //Act
            var result = calc.Add(start, amount);

            //Assert
            Assert.AreEqual(0, result);
        }


        [Test]
        public void Add_0Plus11_11()
        {
            //Arrange
            var calc = new SimpleCalculator();
            var start = 0;
            var amount = 11;

            //Act
            var result = calc.Add(start, amount);

            //Assert
            Assert.AreEqual(11, result);
        }

        [Test]
        public void Subtract_0Minus11_minus11()
        {
            //Arrange
            var calc = new SimpleCalculator();
            var start = 0;
            var amount = 11;

            //Act
            var result = calc.Subtract(start, amount);

            //Assert
            Assert.AreEqual(-11, result);
        }
    }
}