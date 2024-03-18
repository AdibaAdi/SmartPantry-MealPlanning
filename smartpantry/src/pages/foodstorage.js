import React from 'react';
import './foodstorage/foodstorage.css'; 
import foodStorageLogo from './foodstorage/foodstorage logo.jpg'; 
import Meat from './foodstorage/meat.jpeg';  
import poultry from './foodstorage/poultry.jpg';
import Seafood from './foodstorage/seafood.jpg'; 
import fruits from './foodstorage/fruits.jpg'; 
import veggies from './foodstorage/veggies.jpg'; 
import Dairy from './foodstorage/dairy.jpg';
import GenTip from './foodstorage/general.jpg';

const Foodstorage = () => {
  return (
    <div>
      {/* Banner with title and image */}
      <div className="banner">
        <h1 className="banner-title">Food Storage Tips</h1>
        <img src={foodStorageLogo} alt="Food Storage Tips" style={{ width: '100%', height: 'auto' }} />
      </div>

      {/* Content section */}
      <div className="bodyContainer">
        <h2 style={{ fontSize: '48px', margin: '20px 0', textAlign: 'center' }}>Best Practices</h2>
        <div className="section" style={{ marginBottom: '30px' }}>
          <img src={Meat} alt="Red Meat" style={{ width: '50%', height: 'auto' }} />
          <h3 style={{ fontSize: '36px', marginTop: '10px' }}>Red Meat (Beef, Lamb, Pork)</h3>
          <p style={{ fontSize: '30px'}}><strong>Refrigeration:</strong> Store raw red meat in the coldest part of your refrigerator, typically the bottom shelf, and use it within 3-5 days. If you don't plan to use it within this time frame, freeze it.</p>

<p style={{ fontSize: '30px'}}><strong>Packaging:</strong> Keep the meat in its original packaging if it's vacuum-sealed, as this can extend its shelf life. Otherwise, rewrap it using plastic wrap, aluminum foil, or freezer paper, or place it in airtight containers or sealable plastic bags to prevent air exposure and moisture loss.</p>

<p style={{ fontSize: '30px'}}><strong>Freezing:</strong> When freezing red meat, make sure to expel as much air as possible from the packaging to prevent freezer burn. Label the package with the date and type of meat. Most red meat can be frozen for 4-12 months.</p>

<p style={{ fontSize: '30px'}}><strong>Thawing:</strong> Thaw frozen red meat in the refrigerator, not at room temperature. Plan ahead as larger cuts can take a couple of days to thaw. Once thawed, cook the meat within 24 hours for best quality and safety.</p>

<p style={{ fontSize: '30px'}}><strong>Avoid Cross-Contamination:</strong> Use separate cutting boards, plates, and utensils for raw meat and cooked foods or other food types. This prevents raw meat's bacteria from spreading to other foods.</p>

<p style={{ fontSize: '30px'}}><strong>Cook to Proper Temperatures:</strong> Ensure meat reaches a safe internal temperature to kill harmful bacteria. Use a food thermometer to check; for example, poultry should reach 165°F (73.9°C), ground meats like beef and pork should reach 160°F (71.1°C), and steaks or roasts should reach at least 145°F (62.8°C). </p>

<p style={{ fontSize: '30px'}}><strong>Marinate Safely:</strong> Always marinate meat in the refrigerator, not on the counter. If you want to use some of the marinade as a sauce later, reserve a portion ahead of time or bring it to a boil before using.</p>

<p style={{ fontSize: '30px'}}><strong>Avoid Partial Cooking:</strong> Never partially cook meat to finish cooking later, as this can allow bacteria to survive and multiply to dangerous levels.</p>

<p style={{ fontSize: '30px'}}><strong>Handling Leftovers::</strong> Cool leftovers quickly and refrigerate within two hours. Cut large items into smaller portions to cool faster. Consume refrigerated leftovers within three to four days, or freeze them if you won't be eating them soon.</p>
        </div>

        <div className="section" style={{ marginBottom: '30px' }}>
          <img src={poultry} alt="Poultry" style={{ width: '50%', height: 'auto' }} />
          <h3 style={{ fontSize: '36px', marginTop: '10px' }}>Poultry (Chicken, Turkey, Duck)</h3>
          <p style={{ fontSize: '30px'}}><strong>Immediate Refrigeration:</strong> Store poultry in the refrigerator immediately after purchasing. Place it in a dish or container to catch any juices and prevent them from contaminating other foods.</p>
          <p style={{ fontSize: '30px'}}><strong>Use or Freeze Promptly:</strong> Use fresh poultry within 1-2 days or freeze it. Store it in the original packaging if intact, or rewrap securely in plastic wrap, foil, or freezer paper, or in airtight containers.</p>
          <p style={{ fontSize: '30px'}}><strong>Freezing:</strong> You can freeze poultry for up to 9 months for pieces and up to a year for whole birds. Make sure it's tightly sealed in freezer-safe packaging to prevent freezer burn.</p>
          <p style={{ fontSize: '30px'}}><strong>Thawing:</strong> Always thaw poultry in the refrigerator or in cold water, changing the water every 30 minutes. Do not thaw poultry at room temperature to avoid bacterial growth.</p>
        </div>

        <div className="section" style={{ marginBottom: '30px' }}>
          <img src={Seafood} alt="Fish and Seafood" style={{ width: '50%', height: 'auto' }} />
          <h3 style={{ fontSize: '36px', marginTop: '10px' }}>Fish and Seafood</h3>
          <p style={{ fontSize: '30px'}}><strong>Refrigeration:</strong> Fresh fish should be used within 1-2 days of purchase. Store it in the coldest part of the refrigerator, on ice if possible, to maintain freshness.</p>
          <p style={{ fontSize: '30px'}}><strong>Rinsing and Drying:</strong> Rinse fresh fish under cold water and pat dry with paper towels before storing. This can help remove any bacteria from the surface.</p>
          <p style={{ fontSize: '30px'}}><strong>Airtight Packaging:</strong> If not using immediately, wrap the fish tightly in plastic, foil, or moisture-proof paper, or place it in an airtight container before refrigerating.</p>
          <p style={{ fontSize: '30px'}}><strong>Freezing:</strong> Freeze fish in water-tight packaging to prevent air exposure. Most fish can be frozen for up to six months. Label with the date and type of fish.</p>
          <p style={{ fontSize: '30px'}}><strong>Thawing:</strong> Thaw frozen fish in the refrigerator overnight. For quicker thawing, seal the fish in plastic and immerse it in cold water, changing the water every 30 minutes. Use thawed fish immediately for best quality.</p>
        </div>

        <div className="section" style={{ marginBottom: '30px' }}>
          <img src={fruits} alt="Fruits" style={{ width: '50%', height: 'auto' }} />
          <h3 style={{ fontSize: '36px', marginTop: '10px' }}>Fruits</h3>
          <p style={{ fontSize: '30px'}}><strong>Ripening Process:</strong> Understand which fruits ripen after picking and which do not. Apples, bananas, and tomatoes continue to ripen after they are picked, whereas citrus fruits, grapes, and berries do not. Store fruits that ripen after picking at room temperature away from direct sunlight to enhance their ripening.</p>
          <p style={{ fontSize: '30px'}}><strong>Refrigeration:</strong> Once ripe, most fruits benefit from being stored in the refrigerator to slow further ripening. Exceptions include bananas, melons, and tomatoes until they are ripe.</p>
          <p style={{ fontSize: '30px'}}><strong>Ethylene Gas:</strong> Some fruits, like apples, avocados, bananas, peaches, and pears, produce ethylene gas as they ripen. This gas can accelerate ripening and spoilage in other produce. Store these fruits away from other fruits and vegetables to avoid hastening the ripening of sensitive items.</p>
          <p style={{ fontSize: '30px'}}><strong>Airtight Containers:</strong> Berries should be stored in the fridge, ideally in a container that allows air circulation. To extend their shelf life, you can store berries in airtight containers lined with paper towels; however, do not wash them until you're ready to eat, as moisture can promote mold growth.</p>
          <p style={{ fontSize: '30px'}}><strong>Citrus Storage:</strong> Store citrus fruits like lemons, limes, oranges, and grapefruits in a mesh bag or in the crisper drawer of your refrigerator. This helps them retain moisture but also allows air circulation.</p>
        </div>

        <div className="section" style={{ marginBottom: '30px' }}>
          <img src={veggies} alt="Vegetables" style={{ width: '50%', height: 'auto' }} />
          <h3 style={{ fontSize: '36px', marginTop: '10px' }}>Vegetables</h3>
          <p style={{ fontSize: '30px'}}><strong>Humidity Levels:</strong> Vegetables require different humidity levels than fruits. Leafy greens, for instance, do best in a high-humidity environment. Use your refrigerator's crisper drawer settings to manage humidity levels for different types of vegetables.</p>
          <p style={{ fontSize: '30px'}}><strong>Root Vegetables:</strong> Store potatoes, sweet potatoes, onions, and garlic in a cool, dark, and well-ventilated place outside of the refrigerator. These vegetables can last a long time under the right conditions but should be kept away from direct sunlight and moisture.</p>
          <p style={{ fontSize: '30px'}}><strong>Leafy Greens:</strong> Wrap unwashed leafy greens in a damp paper towel and place them in a plastic bag before storing them in the refrigerator. This helps maintain moisture without making the greens too wet.</p>
          <p style={{ fontSize: '30px'}}><strong>Mushrooms:</strong> Keep mushrooms in their original packaging or in a paper bag in the refrigerator. Like berries, they should not be washed until right before you're ready to use them, as they can absorb water and spoil more quickly.</p>
          <p style={{ fontSize: '30px'}}><strong>Cut Vegetables:</strong> Once you cut vegetables, they should be stored in the refrigerator in airtight containers and used within a few days to prevent spoilage and maintain freshness.</p>
          <p style={{ fontSize: '30px'}}><strong>Avoid Washing Before Storage:</strong> Similar to fruits, do not wash vegetables before storing them as the dampness can promote mold growth. Wash them just before use.</p>
        </div>

        <div className="section" style={{ marginBottom: '30px' }}>
          <img src={Dairy} alt="Dairy" style={{ width: '50%', height: 'auto' }} />
          <h3 style={{ fontSize: '36px', marginTop: '10px' }}>Dairy</h3>
          <h4 style={{ fontSize: '32px'}}>Milk and Cream:</h4>
          <p style={{ fontSize: '30px'}}><strong>Refrigerate Promptly:</strong> Always refrigerate milk and cream immediately after purchase and after each use. Do not leave them out at room temperature for extended periods, as this can lead to bacterial growth and spoilage.</p>
          <p style={{ fontSize: '30px'}}><strong>Store Correctly:</strong> Keep milk and cream in the main body of the refrigerator where it is coldest, not in the door, where temperatures can fluctuate with frequent opening and closing.</p>
          <p style={{ fontSize: '30px'}}><strong>Container Matters:</strong> Store milk in its original container to avoid the absorption of flavors from other foods. If you need to transfer it to another container, make sure the container is clean and tightly sealed.</p>
          <p style={{ fontSize: '30px'}}><strong>Use Quickly:</strong> Follow the "first-in, first-out" rule, use older products before newer ones. Check the expiration date and try to use milk within a week of purchase.</p>
          <h4 style={{ fontSize: '32px'}}>Cheese:</h4>
          <p style={{ fontSize: '30px'}}><strong>Wrap Properly:</strong> Store cheese in the refrigerator wrapped in wax paper, parchment paper, or cheese paper followed by a loose layer of plastic wrap. This method allows the cheese to breathe without drying out.</p>
          <p style={{ fontSize: '30px'}}><strong>Temperature and Humidity:</strong> Most cheeses are best kept in the vegetable drawer or a dedicated cheese drawer where the temperature is cold and stable.</p>
          <p style={{ fontSize: '30px'}}><strong>Portion Control:</strong> If you have a large block of cheese, only cut off the amount you need, leaving the rest wrapped and refrigerated. This reduces the cheese's exposure to air and potential contaminants.</p>
          <p style={{ fontSize: '30px'}}><strong>Soft vs. Hard Cheese:</strong> Soft cheeses should be consumed more quickly than hard cheeses. Hard cheeses can last longer, but they should still be checked regularly for mold.</p>
          <h4 style={{ fontSize: '32px'}}>Yogurt, Butter, and Cream Cheese:</h4>
          <p style={{ fontSize: '30px'}}><strong>Seal Tightly:</strong> These should be kept in their original containers when possible and sealed tightly after each use. If the original container isn't resealable, transfer the product to an airtight container.</p>
          <p style={{ fontSize: '30px'}}><strong>Best Temperature:</strong> Store these items in the coldest part of your refrigerator, typically at the back, away from the door.</p>
          <p style={{ fontSize: '30px'}}><strong>Watch for Signs of Spoilage:</strong> Discard any dairy products that smell or taste sour, have mold, or have exceeded their expiration dates.</p>
          <h4 style={{ fontSize: '32px'}}>General Tips for Dairy:</h4>
          <p style={{ fontSize: '30px'}}><strong>Clean Fridge Regularly:</strong> Keeping your refrigerator clean can prevent cross-contamination and the spread of bacteria.</p>
          <p style={{ fontSize: '30px'}}><strong>Monitor Fridge Temperature:</strong> Keep your refrigerator temperature at or below 40°F (4°C). The freezer should be at 0°F (-18°C).</p>
          <p style={{ fontSize: '30px'}}><strong>Avoid Cross-Contamination:</strong> Store dairy products away from strong-smelling foods as they can absorb odors.</p>
          <p style={{ fontSize: '30px'}}><strong>Rotation:</strong> Always put new groceries behind the old ones to ensure older products get used first.</p>
        </div>

        <div className="section" style={{ marginBottom: '30px' }}>
          <img src={GenTip} alt="Conclusion on Food Storage" style={{ width: '50%', height: 'auto' }} />
          <h3 style={{ fontSize: '36px', marginTop: '10px' }}>Conclusion</h3>
          <p style={{ fontSize: '30px'}}>Understanding and implementing proper food storage techniques are essential for maintaining the safety, quality, and longevity of your groceries. By following the correct procedures for refrigeration, freezing, and pantry storage, you can ensure that your food remains nutritious and enjoyable while minimizing waste. Regular monitoring of temperatures, cleanliness, and organization within your storage areas will also aid in preventing foodborne illnesses and contamination. Effective food storage is a crucial aspect of food safety and overall household wellbeing.</p>
        </div>



        </div>
    </div>
  );
};

export default Foodstorage;
