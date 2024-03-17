import styles from './pages.module.css';
import addSymbol from './images/addSymbol.png'
import delSymbol from './images/delSymbol.png'

function CreateRecipe () {

    var last = null;
    var ingrCount = 1;

    const addIngredient = () => {
        last = document.getElementById('ingredientCreator').cloneNode(true)
       // last.id = "ingredientCreator" + ingrCount;
        const elementsThatHaveId = [...last.querySelectorAll('[id]')];
        if (last.matches('[id]')) {
            elementsThatHaveId.push(last);
        }
            elementsThatHaveId.forEach((e) => {
            e.id += ingrCount;
        });
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

    const saveRecipeFunction = () => {
        const recipeData = {
          name: document.getElementById('recipeName').value,
          ingredients: document.getElementById('ingrName').value + "_" + document.getElementById('ingrAmt').value + "_" + document.getElementById('ingrUnit').value,
          steps: document.getElementById('steps').value,
          servings: document.getElementById('servings').value,
          prep: document.getElementById('prep').value,
          cook: document.getElementById('cook').value,
          notes: document.getElementById('notes').value
        }
        
        let Variables = []
        for (let i = 1; i < ingrCount; i++) {
            Variables[i] = document.getElementById('ingrName' + i).value + "_" + document.getElementById('ingrAmt' + i).value + "_" + document.getElementById('ingrUnit' + i).value;
            recipeData.ingredients += " | " + Variables[i];
        }
        document.getElementById('exitText').innerHTML = 'Exit (Saved)'
        alert(JSON.stringify(recipeData));
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
                            <input type='text' placeholder='Recipe Name' className={styles.recipeInputBox} id='recipeName'></input>

                            <p className={styles.ingredientTitleText}>Ingredients:</p>
                            <div className={styles.addIngredientContainer}>
                                <p className={styles.addIngredientText}>Add Ingredient&nbsp;</p>
                                <div className={styles.addIngredientBtnContainer}><button onClick={addIngredient} className={styles.addIngredientButton}><img className={styles.addIngredientImg} src={addSymbol} alt='addIngredient'/></button></div>
                            </div>
                            <div id='ingredientList'>
                                <div className={styles.ingredientCreator} id='ingredientCreator'>
                                    <input type='text' placeholder='Ingredient' className={styles.recipeIngredientBox} id='ingrName'></input>
                                    <input type='text' placeholder='Amount' className={styles.recipeAmountBox} id='ingrAmt'></input>
                                    <select className={styles.recipeSelectBox} id='ingrUnit'> 
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
                            <textarea placeholder='Steps' className={styles.recipeSteps} cols="50" rows="18" id='steps'></textarea>
                        </div>
                        <div className={styles.recipeDetailsContainer}>
                            <p className={styles.recipeTitleText}>Servings:</p>
                            <textarea placeholder='Servings' className={styles.recipeSteps} cols="50" rows="1" id='servings'></textarea>
                            <p className={styles.recipeTitleText}>Prep Time:</p>
                            <textarea placeholder='Prep Time' className={styles.recipeSteps} cols="50" rows="1" id='prep'></textarea>
                            <p className={styles.recipeTitleText}>Cook Time:</p>
                            <textarea placeholder='Cook Time' className={styles.recipeSteps} cols="50" rows="1" id='cook'></textarea>
                            <p className={styles.recipeTitleText}>Notes:</p>
                            <textarea placeholder='Notes' className={styles.recipeSteps} cols="50" rows="10" id='notes'></textarea>
                            <div className={styles.saveRecipeContainer}>
                                <button className={styles.saveRecipeBtn} onClick={saveRecipeFunction}><p className={styles.saveRecipeText}>Save Your Recipe</p></button>
                                <a href="/"><button className={styles.exitRecipeBtn}><p className={styles.saveRecipeText} id='exitText'>Exit Without Saving</p></button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  };
  
  export default CreateRecipe;