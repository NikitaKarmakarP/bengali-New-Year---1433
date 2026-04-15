import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Utensils, Heart, Sparkles, Star, Compass, ArrowRight, X, ChefHat, CheckCircle2, Flame, List } from 'lucide-react';
import riceBg from '../../j.jpg';
import rasgullaImg from '../../r.jpg';
import luchiImg from '../../i.jpg';
import pantaImg from '../../p.jpg';
import shuktoImg from '../../s.jpg';
import muriGhontoImg from '../../m.jpg';
import ruiJholImg from '../../mo.jpg';
import alooPostoImg from '../../a.jpg';
import dhokarDalnaImg from '../../d.jpg';
import potolerDormaImg from '../../po.jpg';
import bhetkiPaturiImg from '../../b.jpg';
import chingriMalaiImg from '../../c.jpg';
import katlaKaliaImg from '../../k.jpg';
import sorseIlishImg from '../../e.jpg';
import chickenKoshaImg from '../../ch.jpg';
import muttonCurryImg from '../../mu.jpg';
import sandeshImg from '../../sa.jpg';
import mishtiDoiImg from '../../mi.jpg';
import vortaGheeImg from '../../o.jpg';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.15, delayChildren: 0.5 } 
  },
  exit: { opacity: 0 }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 80, damping: 15 } 
  }
};

const RecipeSubSection = ({ title, recipe }) => (
  <div style={{ marginBottom: '3rem' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
      <div style={{ background: 'rgba(255,179,0,0.1)', padding: '1rem', borderRadius: '50%' }}>
        <Utensils style={{ color: 'var(--accent-color)' }} size={24} />
      </div>
      <h4 style={{ color: 'white', fontSize: '2rem', fontWeight: 800 }}>{title}</h4>
    </div>
    
    <div style={{ marginBottom: '3rem', background: 'rgba(255,255,255,0.02)', padding: '2.5rem', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem' }}>
        <List style={{ color: 'var(--accent-color)' }} size={24} />
        <p style={{ color: 'white', fontWeight: 700, fontSize: '1.4rem' }}>Ingredients</p>
      </div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
        {recipe.ing.map((ing, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem' }}>
            <CheckCircle2 style={{ color: 'var(--accent-color)', flexShrink: 0 }} size={18} />
            <span style={{ lineHeight: '1.4' }}>{ing}</span>
          </li>
        ))}
      </ul>
    </div>

    <div style={{ marginBottom: '3rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '2rem' }}>
        <ChefHat style={{ color: 'var(--accent-color)' }} size={24} />
        <p style={{ color: 'white', fontWeight: 700, fontSize: '1.4rem' }}>Method</p>
      </div>
      {recipe.method.map((step, i) => (
        <motion.div 
          key={i} 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.5rem', background: 'rgba(255,179,0,0.02)', padding: '1.5rem', borderRadius: '20px', borderLeft: '4px solid rgba(255,179,0,0.3)' }}
        >
          <div style={{ 
            background: 'var(--accent-color)', color: 'black', fontWeight: 900, 
            width: '35px', height: '35px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 
          }}>
            {i + 1}
          </div>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', lineHeight: '1.8' }}>{step}</p>
        </motion.div>
      ))}
    </div>

    {recipe.tips && (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        style={{ padding: '2rem', background: 'linear-gradient(135deg, rgba(255,179,0,0.1), rgba(255,179,0,0.02))', borderRadius: '24px', border: '1px solid rgba(255,179,0,0.2)', display: 'flex', gap: '1.5rem' }}
      >
        <Flame style={{ color: 'var(--accent-color)', flexShrink: 0 }} size={30} />
        <div>
          <h5 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Chef's Tip</h5>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', lineHeight: '1.6' }}>{recipe.tips}</p>
        </div>
      </motion.div>
    )}
  </div>
);

const Food = () => {
  const [tastedItems, setTastedItems] = useState({});
  const [selectedRecipeData, setSelectedRecipeData] = useState(null);

  const fireConfetti = () => {
    if (window.confetti) {
      window.confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ffd700', '#ff8c00', '#ff3366'],
        disableForReducedMotion: true
      });
    }
  };

  const handleTaste = (foodId) => {
    setTastedItems(prev => ({ ...prev, [foodId]: true }));
    if (!window.confetti) {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js';
      script.onload = fireConfetti;
      document.head.appendChild(script);
    } else {
      fireConfetti();
    }
  };

  const detailedRecipes = {
    24: {
      ing: ["1 cup rice", "3–4 medium potatoes", "2–3 green chilies", "1 small onion (optional)", "2 tbsp mustard oil", "1–2 tsp pure ghee", "Salt"],
      method: [
        "Cook Rice: Wash and boil rice until soft and fluffy. It MUST be steaming hot for the best experience.",
        "Boil Potatoes: Boil and peel potatoes while warm.",
        "Mash Alu Vorta: Mash potatoes thoroughly (no lumps). Add salt, mustard oil, chopped onions, and chilies. Mix well using your hands for that authentic flavor!",
        "Drizzle Ghee: Place the hot rice on a plate, add a dollop of ghee on top, and place the vorta beside it.",
        "Authentic Soul Style: Take hot rice, mix with ghee, add alu vorta, crush a green chili slightly, mix everything together and enjoy!"
      ],
      tips: "Mustard oil is non-negotiable for real flavor! Always eat while fresh and hot."
    },
    4: {
      ing: ["2 cups cooked rice", "Water (enough to soak)", "Salt", "1 onion (sliced)", "2–3 green chilies", "Mustard oil"],
      method: [
        "Fermentation: Take leftover cooked rice. Add enough water to fully soak it. Cover and keep overnight (8–10 hours).",
        "Next morning, lightly mash the rice in its water and add salt.",
        "Serve with raw onions, green chilies, and a drizzle of mustard oil. Best accompanied by fried Hilsa fish."
      ],
      tips: "Best taste comes from an earthen pot (মাটির হাঁড়ি). A slight sour smell means perfect fermentation!"
    },
    26: {
      luchi: {
        ing: ["2 cups refined flour (maida)", "1 tbsp ghee or oil", "½ tsp salt (optional)", "Water (as needed)", "Oil for deep frying"],
        method: [
          "Prepare Dough: In a bowl, mix flour, salt, and ghee. Rub gently until crumb-like texture forms. Add water gradually and knead into a soft but tight dough. Cover and rest for 20–30 minutes.",
          "Shaping: Divide dough into small equal balls. Roll each into smooth balls (no cracks). Flatten and roll into small discs (3–4 inch).",
          "Frying: Heat oil in a deep pan (medium-high heat). Slide one luchi at a time. Gently press with ladle → it will puff up fully. Flip once and fry till light golden (not brown)."
        ],
        tips: "Oil must be hot enough, otherwise luchi won’t puff. Dough should not be too soft."
      },
      dal: {
        ing: ["1 cup chana dal (soaked 1–2 hours)", "2 tbsp coconut slices", "1 bay leaf", "1 tsp cumin seeds", "1 tsp ginger paste", "2 dried red chilies", "½ tsp turmeric", "Salt to taste", "1 tsp sugar", "½ tsp garam masala", "1 tbsp ghee"],
        method: [
          "Boil Dal: Pressure cook dal with turmeric and salt (2–3 whistles). Keep grains separate (not mushy).",
          "Tempering: Heat oil/ghee. Add bay leaf, cumin seeds, red chilies. Add coconut slices → fry till golden.",
          "Cooking: Add ginger paste and sauté. Add boiled dal and mix. Add sugar and simmer 5–10 minutes.",
          "Finish: Add garam masala + ghee. Serve thick and aromatic."
        ]
      }
    },
    21: {
      ing: ["3 medium potatoes (cut into cubes)", "3 tbsp poppy seeds (posto)", "2–3 green chilies", "3 tbsp mustard oil", "½ tsp nigella seeds (kalonji)", "Salt to taste", "½ tsp turmeric (optional)", "Water (as needed)"],
      method: [
        "Soak poppy seeds in warm water for 15–20 minutes. Grind with green chilies and a little water to make a smooth, thick paste.",
        "Heat mustard oil until smoking point. Fry potato cubes with a pinch of turmeric and salt until slightly golden.",
        "Add nigella seeds (kalonji) to the same pan and let them splutter.",
        "Add the prepared posto paste. Mix well with potatoes. Add a little water for gravy consistency.",
        "Cover and cook on low flame for 8–10 minutes. Finish with slit green chilies and a drizzle of raw mustard oil."
      ],
      tips: "Always cook on low flame for a creamy texture. Posto should taste nutty, not bitter."
    },
    22: {
      ing: ["1 bitter gourd (karela) - sliced", "1 potato - cubed", "1 raw banana - cubed", "1 drumstick (optional)", "1 brinjal (optional)", "1 cup milk", "1 tbsp ginger paste", "½ tsp radhuni (or celery seeds)", "1 bay leaf", "2 tbsp mustard oil or ghee", "Salt + sugar"],
      method: [
        "Fry bitter gourd slices till golden and set aside. Fry other vegetables lightly.",
        "In the same pan, add bay leaf and ginger paste. Sauté until the raw smell goes away.",
        "Add all vegetables back. Mix gently with salt and a pinch of sugar.",
        "Pour milk slowly and simmer on low flame. Add a little water if needed.",
        "Heat 1 tsp ghee separately, crackle radhuni seeds, and pour this over the curry. Simmer for 5-7 minutes."
      ],
      tips: "Balanced taste (bitter + sweet) is key. Don't overcook; vegetables should stay intact."
    },
    29: {
      ing: ["1 cup chana dal (soaked 4–5 hours)", "1 tsp ginger paste", "1 tsp cumin powder", "Salt", "2 potatoes (cubed)", "1 tomato", "1 bay leaf", "1 tsp cumin seeds", "Garam masala", "Mustard oil"],
      method: [
        "Grind soaked dal into a thick paste and cook with ginger/cumin until thick. Spread on a plate, cool, and cut into diamond shapes. Deep fry until golden.",
        "Fry potatoes separately. In the same pan, add bay leaf and cumin seeds. Add tomato and spices; cook till oil separates.",
        "Add water and bring to a boil. Add the fried dhokas and simmer for 8–10 mins."
      ]
    },
    30: {
      ing: ["6–8 pointed gourds (potol)", "100g shrimp or paneer", "1 onion paste", "1 tsp ginger-garlic paste", "Turmeric, chili powder", "Mustard oil"],
      method: [
        "Prepare Potol: Peel lightly, cut ends, and scoop out seeds to make them hollow.",
        "Stuffing: Cook shrimp with spices OR mash paneer with spices. Fill the hollow gourds.",
        "Stuff & Fry: Fill potol with your choice of stuffing and fry lightly until golden.",
        "Gravy: Heat oil, add onion and ginger-garlic paste. Cook till oil separates. Add stuffed potol and water. Simmer for 10-15 mins."
      ]
    },
    27: {
      ing: ["1 large fish head (Rui/Katla)", "½ cup Gobindo Bhog rice", "1 potato (cubed)", "1 onion (sliced)", "1 tsp ginger paste", "Whole spices (bay leaf, cinnamon, cardamom)", "Turmeric, cumin powder, salt", "Mustard oil, 1 tsp ghee"],
      method: [
        "Prepare Fish Head: Clean the fish head, marinate with salt/turmeric, and fry until crispy. Remove and lightly crush into smaller pieces.",
        "Rice Fragrance: Wash and drain the Gobindo Bhog rice, then lightly fry it in the same oil for 2–3 minutes to lock in that aroma.",
        "Base Cooking: Sauté whole spices, onions, and ginger paste. Add potato cubes and fry for a few minutes.",
        "Combine: Add the fried rice and fish head pieces. Add cumin, turmeric, and salt. Add just enough water to cook the rice.",
        "Final Touch: Cook covered on low flame until moisture is nearly gone. Add green chilies and 1 tsp ghee. Texture should be moist and grainy, never watery!"
      ],
      tips: "Frying the Gobindo Bhog rice separately is the secret to that elite festive fragrance! Always finish with a dollop of pure ghee."
    },
    17: {
      ing: ["4 pieces Rohu fish", "2 potatoes (cut into wedges)", "1 tomato (chopped)", "2 green chilies", "1 tsp cumin seeds", "½ tsp turmeric", "Salt", "Mustard oil"],
      method: [
        "Marinate fish with salt and turmeric. Fry lightly until golden and set aside.",
        "In the same oil, fry potato wedges until light golden. Add cumin seeds and let them crackle.",
        "Add chopped tomatoes and cook until soft. Add turmeric, salt, and water for a light gravy.",
        "Add potatoes and boil till half cooked. Then add fried fish and green chilies.",
        "Simmer for 8–10 minutes. Garnish with fresh coriander if desired."
      ]
    },
    23: {
      ing: ["4 pieces Bhetki fish fillets", "2 tbsp black mustard seeds", "1 tbsp yellow mustard seeds", "2 tbsp grated coconut", "3–4 green chilies", "½ tsp turmeric", "3–4 tbsp mustard oil", "Banana leaves"],
      method: [
        "Mustard Paste: Soak mustard seeds and grind with coconut and green chilies until smooth. Don't over-grind or it may turn bitter!",
        "Marination: Coat fish fillets with the mustard paste, turmeric, salt, and 2 tbsp mustard oil. Rest for 20–30 minutes.",
        "Banana Leaf Prep: Lightly heat banana leaf squares over a flame until they become soft and easy to fold.",
        "Wrapping: Place fish on a leaf, add a green chili and a drizzle of oil on top. Fold into a parcel and tie with thread.",
        "Cooking: Steam the parcels for 15–20 minutes (or pan-cook on low flame). Let it rest 5 minutes before opening."
      ],
      tips: "Heating the banana leaf over a flame is the secret to a smoky aroma and easy folding! Always serve with hot steamed rice."
    },
    20: {
      ing: ["4 pieces Katla fish", "2 onions (paste + sliced)", "1 tbsp ginger-garlic paste", "1 tomato", "Whole spices (bay leaf, cinnamon, cardamom)", "Turmeric, chili powder", "Mustard oil"],
      method: [
        "Marinate fish with salt and turmeric. Fry until golden.",
        "Heat oil and add whole spices. Fry sliced onions till golden brown. Add onion paste and cook till oil separates.",
        "Add ginger-garlic paste and tomato. Cook well.",
        "Add water and bring to a boil. Add fish and cook for 10–12 minutes.",
        "Finish with a touch of garam masala and ghee."
      ]
    },
    25: {
      ing: ["500g chicken", "2 onions (sliced)", "1 tbsp ginger-garlic paste", "1 cup yogurt", "Turmeric, chili powder", "Garam masala", "Mustard oil"],
      method: [
        "Marinate chicken with yogurt and spices for 1–2 hours.",
        "Heat oil and fry onions till deep brown.",
        "Add marinated chicken and cook on low flame, stirring continuously until oil separates (Koshano).",
        "Add a little water, cover, and cook till tender."
      ],
      tips: "Slow cooking (Koshano) is the secret to the best flavor!"
    },
    11: {
      ing: ["1 liter full-fat milk", "½ cup sugar", "2 tbsp curd (starter)"],
      method: [
        "Boil milk and reduce to ¾ quantity.",
        "Caramelize sugar till golden brown and carefully add it to the thickened milk.",
        "Cool milk to a warm temperature. Mix in the curd starter gently.",
        "Pour into a clay pot and keep warm for 6–8 hours to set."
      ],
      tips: "Chill for the best taste!"
    },
    28: {
      ing: ["4 pieces Hilsa fish", "3 tbsp mustard seeds (black + yellow mix)", "2 green chilies", "½ tsp turmeric", "Salt", "3 tbsp mustard oil"],
      method: [
        "Mustard Paste: Soak mustard seeds for 10 mins. Grind with green chilies + little water → smooth paste.",
        "Marination: Mix fish with salt + turmeric + mustard paste. Add mustard oil and rest for 10 minutes.",
        "Cooking: Place in pan, add little water. Cover and cook for 10–12 minutes on low flame.",
        "Finish: Add raw mustard oil drizzle + green chilies."
      ],
      tips: "Don’t overcook → fish becomes dry."
    },
    7: {
      ing: ["500g mutton", "2 onions (paste + sliced)", "1 tbsp ginger-garlic paste", "1 cup yogurt", "2 tsp red chili powder", "1 tsp turmeric", "Whole spices (bay leaf, cinnamon, cardamom)", "Mustard oil"],
      method: [
        "Marination: Mix mutton with yogurt + spices + salt. Rest for 2–4 hours (best overnight).",
        "Cooking Base: Heat mustard oil. Add whole spices. Fry onions till deep golden brown.",
        "Kosha Process: Add marinated mutton. Cook on low flame, stirring continuously. Let oil separate (this is “kosha”).",
        "Slow Cooking: Add little water. Cover and cook till tender (45–60 mins)."
      ],
      tips: "The darker the gravy → the better the flavor 😍"
    },
    16: {
      ing: ["500g large Tiger prawns (clean + devein)", "1 cup thick coconut milk", "1 onion (paste)", "1 tsp ginger paste", "2–3 green chilies", "Turmeric, salt", "1 tsp sugar, 1 tsp ghee", "Whole spices (bay leaf, cinnamon, cardamom)", "Mustard oil"],
      method: [
        "Marination: Clean the prawns (keep the head for extra flavor!) and marinate with salt/turmeric for 15 mins.",
        "Quick Fry: Lightly fry prawns for only 1–2 minutes to keep them soft. Overcooking makes them rubbery!",
        "Base: In the same oil, add whole spices and fry the onion paste till golden. Sauté ginger paste until aromatic.",
        "Simmer: Add salt, sugar, and thin coconut milk (or a little water) and let it simmer gently.",
        "Final Touch: Add fried prawns and green chilies. At the very end, pour in the thick coconut milk and 1 tsp ghee. Simmer for only 1 minute before turning off the flame."
      ],
      tips: "Always add the thickest coconut milk at the very end for that luxurious silkiness! The mild sweetness is the signature of an authentic Malai Curry."
    },
    12: {
      ing: ["1 liter full-fat milk", "2 tbsp lemon juice / vinegar", "3–4 tbsp powdered sugar", "½ tsp cardamom powder"],
      method: [
        "Make Fresh Chhena: Boil milk, add lemon juice slowly while stirring. Strains using muslin cloth and wash with cold water. Hang for 30 minutes.",
        "Kneading: Knead gently with palm for 8–10 minutes until smooth and greasy. No graininess allowed!",
        "Stir-Cooking: Heat a pan on low flame, add chhena and sugar. Stir continuously for 5–7 minutes. Don't overcook!",
        "Shaping: Cool slightly and shape into round balls or traditional designs. Garnish with pistachios."
      ],
      tips: "Full-fat milk is a must. Kneading is the soul of softness! Moister texture = perfect Sandesh."
    },
    10: {
      ing: ["1 liter milk", "2 tbsp lemon juice", "1 cup sugar", "4 cups water"],
      method: [
        "Knead chhena till smooth & non-grainy (at least 10 mins).",
        "Make soft balls ensure no cracks.",
        "Cook in boiling syrup (covered) for 15 mins. Balls will double in size.",
        "Result: Soft, spongy, juicy rasgullas."
      ],
      tips: "Kneading = softness! Syrup = light and boiling."
    }
  };

  const foodItems = [
    {
      id: 26, emoji: '🥯', en: 'Fulko Luchi & Cholar Dal', bn: 'ফুলকো লুচি ও ছোলার ডাল',
      desc: 'Puffed, golden Luchis served with fragrant Cholar Dal tempered with coconut and ginger. The quintessential festive start.',
      image: luchiImg,
      category: 'Festive Delight'
    },
    {
      id: 24, emoji: '🍛', en: 'Hot Rice, Alu Vorta & Ghee', bn: 'গরম ভাত,আলু ভর্তা,কাঁচা লংকা ও ঘি',
      desc: 'The ultimate Bengali comfort! Steaming hot rice served with creamy Alu Vorta, fiery green chilies, and a dollop of pure aromatic ghee.',
      image: vortaGheeImg,
      category: 'Soulful Comfort'
    },
    {
      id: 21, emoji: '🥔', en: 'Aloo Posto', bn: 'আলু পোস্ত',
      desc: 'The ultimate Bengali comfort food! Cubes of potatoes slow-cooked in a thick, nutty poppy seed paste with a punch of mustard oil and green chilies.',
      image: alooPostoImg,
      category: 'Classic Side'
    },
    {
      id: 22, emoji: '🍲', en: 'Dudh Shukto', bn: 'দুধ শুক্তো',
      desc: 'A delicate, bitter-sweet symphony of vegetables. Simmered in a creamy milk-based gravy with ginger and radhuni spice for a soulful start to the meal.',
      image: shuktoImg,
      category: 'Soulful Start'
    },
    {
      id: 4, emoji: '🍚', en: 'Panta Bhat', bn: 'পান্তা ভাত',
      desc: 'A traditional New Year staple! Fermented rice beautifully paired with fried Hilsa, fiery green chilies, and crisp onions.',
      image: pantaImg,
      category: 'Main Course'
    },
    {
      id: 29, emoji: '🍛', en: 'Dhokar Dalna', bn: 'ধোকার ডালনা',
      desc: 'Pointed lentil cakes fried and simmered in a rich, ginger-cumin gravy.',
      image: dhokarDalnaImg,
      category: 'Classic Side'
    },
    {
      id: 30, emoji: '🥒', en: 'Potoler Dorma', bn: 'পটলের দোরমা',
      desc: 'Pointed gourds stuffed with a spiced mixture of shrimp or paneer, simmered in a rich, aromatic gravy.',
      image: potolerDormaImg,
      category: 'Signature'
    },
    {
      id: 27, emoji: '🐟', en: 'Muri Ghonto', bn: 'মুড়িঘণ্ট',
      desc: 'Fish heads slow-cooked with Gobindo Bhog rice and aromatic spices. A rich, textural masterpiece.',
      image: muriGhontoImg,
      category: 'Signature'
    },
    {
      id: 17, emoji: '🐟', en: 'Rui Macher Patla Jhol', bn: 'রুই মাছের পাতলা ঝোল',
      desc: 'Light and comforting Rohu fish curry with potato wedges. The soulful staple of every Bengali home.',
      image: ruiJholImg,
      category: 'Soulful Comfort'
    },
    {
      id: 20, emoji: '🐟', en: 'Katla Kalia', bn: 'কাতলা কালিয়া',
      desc: 'Grand festive preparation of Katla fish! Steeped in a rich, thick, and aromatic gravy.',
      image: katlaKaliaImg,
      category: 'Festive Special'
    },
    {
      id: 23, emoji: '🍃', en: 'Vetki Macher Paturi', bn: 'ভেটকি মাছের পাতুরি',
      desc: 'Tender Bhetki fillets marinated in mustard-coconut paste, wrapped in banana leaves, and steamed.',
      image: bhetkiPaturiImg,
      category: 'Signature'
    },
    {
      id: 16, emoji: '🍤', en: 'Chingri Malai Curry', bn: 'চিংড়ি মালাইকারি',
      desc: 'Giant tiger prawns gracefully cooked in a rich, mild, and creamy coconut milk gravy.',
      image: chingriMalaiImg,
      category: 'Signature'
    },
    {
      id: 28, emoji: '🐟', en: 'Shorshe Ilish', bn: 'সর্ষে ইলিশ',
      desc: 'The most iconic preparation of Hilsa! Gently simmered in a pungent, fiery mustard paste.',
      image: sorseIlishImg,
      category: 'Signature'
    },
    {
      id: 25, emoji: '🍗', en: 'Chicken Kosha', bn: 'চিকেন কষা',
      desc: 'Spicy and rich Bengali chicken curry, slow-cooked in a thick onion and ginger-garlic paste.',
      image: chickenKoshaImg,
      category: 'Festive Special'
    },
    {
      id: 7, emoji: '🍖', en: 'Kosha Mangsho', bn: 'মাটন কারি',
      desc: 'Slow-cooked, deeply dark, and immensely flavorful mutton. A rich centerpiece for any celebration.',
      image: muttonCurryImg,
      category: 'Main Course'
    },
    {
      id: 10, emoji: '🍬', en: 'Rasgulla', bn: 'রসগোল্লা',
      desc: 'Spongy, heavenly, and drenched in sweet syrup. Iconic sweetness.',
      image: rasgullaImg,
      category: 'Dessert'
    },
    {
      id: 12, emoji: '🍪', en: 'Sandesh', bn: 'সন্দেশ',
      desc: 'Fresh chhena flavored with cardamom or saffron. Melt-in-the-mouth texture.',
      image: sandeshImg,
      category: 'Dessert'
    },
    {
      id: 11, emoji: '🍮', en: 'Mishti Doi', bn: 'মিষ্টি দই',
      desc: 'Legendary sweet yogurt crafted by slowly boiling milk until it thickens.',
      image: mishtiDoiImg,
      category: 'Dessert'
    }
  ];

  return (
    <motion.div 
      className="page-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={{ padding: '6rem 2rem', minHeight: '100vh', overflowX: 'hidden' }}
    >
      {/* Background Image Container */}
      <div style={{ position: 'fixed', inset: 0, zIndex: -1, overflow: 'hidden', background: '#0a0a0a' }}>
        <motion.div 
          animate={{ scale: [1, 1.15, 1], rotate: [0, 1, -1, 0] }} 
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          style={{ 
            position: 'absolute', inset: '-10%', width: '120%', height: '120%',
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${riceBg})`,
            backgroundSize: 'cover', backgroundPosition: 'center',
            filter: 'contrast(1.05) brightness(0.95)'
          }}
        />
        {/* Soft edge vignette */}
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.5) 100%)' }} />
      </div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div variants={itemVariants} style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <h1 className="bangla-text shimmer-text" style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', color: 'white' }}>নববর্ষের ভোজ</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--accent-color)', letterSpacing: '4px', fontWeight: 900, textTransform: 'uppercase' }}>The Grand Boishakh Feast</p>
        </motion.div>

        {/* DEDICATED RECIPE DISPLAY SECTION */}
        <AnimatePresence>
          {selectedRecipeData && (
            <motion.section
              initial={{ opacity: 0, scale: 0.95, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -50 }}
              transition={{ duration: 0.5, type: 'spring', bounce: 0.3 }}
              className="glass-panel"
              style={{ 
                marginBottom: '6rem', 
                padding: '4rem', 
                background: 'rgba(10,10,10,0.8)', 
                backdropFilter: 'blur(30px)',
                WebkitBackdropFilter: 'blur(30px)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '40px',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 30px 100px -10px rgba(0,0,0,1), inset 0 0 0 1px rgba(255,255,255,0.05)'
              }}
            >
              <div style={{ position: 'absolute', top: '-20%', left: '-10%', width: '50%', height: '50%', background: 'radial-gradient(circle, rgba(255,179,0,0.1) 0%, transparent 70%)', filter: 'blur(60px)', zIndex: 0, pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', bottom: '-20%', right: '-10%', width: '50%', height: '50%', background: 'radial-gradient(circle, rgba(255,179,0,0.05) 0%, transparent 70%)', filter: 'blur(60px)', zIndex: 0, pointerEvents: 'none' }} />

              <button 
                onClick={() => setSelectedRecipeData(null)}
                style={{ 
                  position: 'absolute', top: '2rem', right: '2rem', 
                  background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', 
                  width: '50px', height: '50px', borderRadius: '50%', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', zIndex: 10, transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(255,179,0,0.2)'; e.currentTarget.style.color = 'var(--accent-color)'; e.currentTarget.style.transform = 'scale(1.1) rotate(90deg)'; }}
                onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = 'white'; e.currentTarget.style.transform = 'scale(1) rotate(0deg)'; }}
              >
                <X size={24} />
              </button>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '5rem', position: 'relative', zIndex: 1 }}>
                <div style={{ textAlign: 'left', position: 'sticky', top: '2rem', height: 'fit-content' }}>
                  <motion.div 
                    initial={{ opacity: 0, x: -30, rotate: -5 }} 
                    animate={{ opacity: 1, x: 0, rotate: 0 }}
                    transition={{ duration: 0.6, type: 'spring' }}
                    style={{ position: 'relative', borderRadius: '30px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.8)', marginBottom: '3rem' }}
                  >
                    <motion.img 
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                      src={selectedRecipeData.image} 
                      alt={selectedRecipeData.en} 
                      style={{ width: '100%', height: '500px', objectFit: 'cover', display: 'block' }} 
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 50%)', pointerEvents: 'none' }} />
                    <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', right: '2rem' }}>
                      <span style={{ background: 'var(--accent-color)', color: 'black', padding: '0.5rem 1.5rem', borderRadius: '50px', fontSize: '0.9rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '2px', display: 'inline-block', marginBottom: '1rem' }}>
                        {selectedRecipeData.category || 'Recipe'}
                      </span>
                      <h2 className="bangla-text" style={{ fontSize: '3.5rem', color: 'white', lineHeight: '1.2', textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>{selectedRecipeData.bn}</h2>
                    </div>
                  </motion.div>
                  
                  <h3 style={{ fontSize: '2rem', color: 'white', fontWeight: 800, marginBottom: '1rem' }}>{selectedRecipeData.en}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                    {selectedRecipeData.desc}
                  </p>
                </div>

                <div style={{ textAlign: 'left', paddingTop: '2rem' }}>
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    {selectedRecipeData.id === 26 ? (
                      <>
                        <RecipeSubSection title="Fulko Luchi" recipe={detailedRecipes[26].luchi} />
                        <RecipeSubSection title="Cholar Dal" recipe={detailedRecipes[26].dal} />
                      </>
                    ) : (
                      <RecipeSubSection title="Master Recipe" recipe={detailedRecipes[selectedRecipeData.id]} />
                    )}
                  </motion.div>
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px' }}>
          {foodItems.map((food) => (
            <motion.div
              key={food.id}
              variants={itemVariants}
              className="glass-panel"
              style={{ 
                overflow: 'hidden', display: 'flex', flexDirection: 'column', 
                background: 'rgba(255,255,255,0.03)', 
                border: '1px solid rgba(255,255,255,0.08)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                borderRadius: '24px',
                transition: 'all 0.4s ease',
                cursor: 'pointer',
                boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)'
              }}
              whileHover={{ 
                y: -15, 
                background: 'rgba(255,255,255,0.08)',
                boxShadow: '0 20px 40px -10px rgba(0,0,0,0.7), 0 0 20px rgba(255,179,0,0.2)'
              }}
              onClick={() => {
                if(detailedRecipes[food.id]) {
                  setSelectedRecipeData(food);
                  window.scrollTo({ top: 400, behavior: 'smooth' });
                }
              }}
            >
              <div style={{ height: '350px', overflow: 'hidden', position: 'relative' }}>
                <img src={food.image} alt={food.en} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent 40%)' }} />
              </div>

              <div style={{ padding: '3rem', flexGrow: 1 }}>
                <h2 className="bangla-text" style={{ fontSize: '2.5rem', color: 'white' }}>{food.bn}</h2>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--accent-color)', marginBottom: '1.5rem' }}>{food.en}</h3>
                <p style={{ color: 'white', opacity: 0.6, lineHeight: 1.6, marginBottom: '2.5rem' }}>{food.desc}</p>

                <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                  <button 
                    onClick={(e) => { e.stopPropagation(); handleTaste(food.id); }}
                    className={tastedItems[food.id] ? "btn-secondary" : "btn-premium"}
                    style={{ flex: 1, padding: '1.2rem' }}
                  >
                    {tastedItems[food.id] ? "Enjoyed! ✨" : "Taste Joy"}
                  </button>
                  {detailedRecipes[food.id] && (
                    <button 
                      className="btn-secondary"
                      style={{ padding: '1.2rem 2.5rem', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }}
                    >
                      Recipe
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Food;
