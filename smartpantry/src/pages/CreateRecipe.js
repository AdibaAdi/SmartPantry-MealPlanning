import styles from './pages.module.css';
import addSymbol from './images/addSymbol.png'
import delSymbol from './images/delSymbol.png'

function CreateRecipe () {

    var last = null;
    var ingrCount = 1;

    const addIngredient = () => {
        last = document.getElementById('ingredientCreator').cloneNode(true)
        last.id = "ingredientCreator" + ingrCount;
        ingrCount++;
        document.getElementById('ingredientList').appendChild(last);
    }

    const removeIngredient = () => {
        if(ingrCount > 1){
            last = document.getElementById('ingredientCreator' + (ingrCount-1));
            ingrCount--;
            last.remove();
        }
    }

    return( 
        <div>
            <div className={styles.banner}>
                <div className={styles.recipeCreateTitleContainer}>
                    <div>
                        <p className={styles.recipeCreateTitleText}>Create A Recipe</p>
                    </div>
                </div>
            </div>
            <div className={styles.recipeCreateOuterContainer}>
                <div className={styles.recipeCreateInnerContainer}>
                    <div className={styles.recipeCreateInnererContainer}>
                        <div>
                            <p className={styles.recipeTitleText}>Recipe Name:</p>
                            <input type='text' placeholder='Recipe Name' className={styles.recipeInputBox}></input>

                            <p className={styles.ingredientTitleText}>Ingredients:</p>
                            <div className={styles.addIngredientContainer}>
                                <p className={styles.addIngredientText}>Add Ingredient&nbsp;</p>
                                <div className={styles.addIngredientBtnContainer}><button onClick={addIngredient} className={styles.addIngredientButton}><img className={styles.addIngredientImg} src={addSymbol} alt='addIngredient'/></button></div>
                            </div>
                            <div id='ingredientList'>
                                <div className={styles.ingredientCreator} id='ingredientCreator'>
                                    <input type='text' placeholder='Ingredient' className={styles.recipeIngredientBox}></input>
                                    <input type='text' placeholder='Amount' className={styles.recipeAmountBox}></input>
                                    <select className={styles.recipeSelectBox}> 
                                        <option value="oz">oz</option>
                                        <option value="tsp">tsp</option>
                                        <option value="tbsp">tbsp</option>
                                        <option value="lb">lb</option>
                                        <option value="ct">ct</option>
                                    </select>
                                    <br></br>
                                </div>
                            </div>
                            <div className={styles.addIngredientContainer}>
                                <p className={styles.addIngredientText}>Remove Ingredient&nbsp;</p>
                                <div className={styles.addIngredientBtnContainer}><button onClick={removeIngredient} className={styles.addIngredientButton}><img className={styles.addIngredientImg} src={delSymbol} alt='addIngredient'/></button></div>
                            </div>

                        </div>
                        <div>
                            <p className={styles.recipeTitleText}>Steps:</p>
                            <textarea placeholder='Steps' className={styles.recipeSteps} cols="40" rows="5"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  };
  
  export default CreateRecipe;