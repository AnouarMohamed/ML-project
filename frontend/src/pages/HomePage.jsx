import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './HomePage.css';

function HomePage() {
  const navigate = useNavigate();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const algorithms = [
    {
      title: "Polynomial Regression",
      desc: "Extends linear regression by modeling the relationship between variables as an nth degree polynomial, allowing for non-linear data fitting.",
      icon: <path d="M3 21c3-10 8-12 12-12s6 10 6 10" />,
      color: "#3b82f6",
      path: "/reg"
    },
    {
      title: "K-Nearest Neighbors",
      desc: "Classifies data points based on the majority class of their 'k' nearest neighbors, assuming similar things exist in close proximity.",
      icon: <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0 M8 8l-2-2 M16 16l2 2 M8 16l-2 2 M16 8l2-2" />,
      color: "#8b5cf6",
      path: "/knn"
    },
    {
      title: "Decision Trees",
      desc: "Uses a tree-like model of decisions. The algorithm splits data into subsets based on the most significant attribute at each node.",
      icon: <path d="M12 3v4m0 0L7 10m5-3l5 7m-10 0v4m0 0L4 21m3-3l6 0m1-4v4m0 0l-3 3m3-3l3 3" />,
      color: "#10b981",
      path: "/d-trees"
    },
    {
      title: "Support Vector Machine",
      desc: "Finds the optimal hyperplane that best separates different classes in the feature space, maximizing the margin between them.",
      icon: <path d="M4 20L20 4M4 4l16 16M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />,
      color: "#f59e0b",
      path: "/svm"
    },
    {
      title: "Artificial Neural Networks",
      desc: "Computing systems inspired by biological neural networks. Layers of nodes learn to recognize complex patterns through training.",
      icon: <path d="M6 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-6 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-6 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />,
      color: "#ef4444",
      path: "/ann"
    },
    {
      title: "K-Means Clustering",
      desc: "Partitions data into 'k' distinct clusters based on distance to the centroid. Iteratively assigns points and updates centroids.",
      icon: <path d="M8 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm8 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-8 4l8-8" />,
      color: "#ec4899",
      path: "/kmeans"
    },
    {
      title: "DBSCAN",
      desc: "Density-Based Spatial Clustering. Groups together points that are closely packed together and marks points in low-density regions as outliers.",
      icon: <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0 M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />,
      color: "#6366f1",
      path: "/DBScan"
    },
    {
      title: "Principal Component Analysis",
      desc: "Dimensionality reduction technique that transforms high-dimensional data into a lower-dimensional form while preserving variance.",
      icon: <path d="M3 3l18 18M3 21l18-18M12 8v8M8 12h8" />,
      color: "#06b6d4",
      path: "/pca"
    }
  ];

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#0f172a',
      backgroundImage: 'radial-gradient(#1e293b 1px, transparent 1px)',
      backgroundSize: '40px 40px',
      padding: '2rem 1rem',
      color: '#cbd5e1'
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ 
            textAlign: 'center', 
            marginBottom: '5rem',
            padding: '3rem 1rem'
          }}
        >
          <h1 style={{ 
            fontSize: '3rem', 
            fontWeight: '800', 
            color: '#f8fafc',
            marginBottom: '1.5rem',
            letterSpacing: '-0.025em'
          }}>
            Machine Learning <span style={{ color: '#3b82f6' }}>Visualizer</span>
          </h1>
          <p style={{ 
            fontSize: '1.25rem', 
            color: '#94a3b8', 
            maxWidth: '800px', 
            margin: '0 auto',
            lineHeight: '1.8'
          }}>
            An interactive platform designed to bridge the gap between theoretical machine learning concepts and practical understanding through real-time visualization.
          </p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ marginTop: '2.5rem' }}
          >
            <button 
              onClick={() => navigate('/docs')}
              className="start-button"
              style={{
                padding: '1rem 2.5rem',
                fontSize: '1.1rem',
                fontWeight: '600',
                color: 'white',
                backgroundColor: '#3b82f6',
                border: 'none',
                borderRadius: '50px',
                cursor: 'pointer',
                boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.5)',
                transition: 'transform 0.2s, box-shadow 0.2s'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 15px 30px -5px rgba(59, 130, 246, 0.6)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(59, 130, 246, 0.5)';
              }}
            >
              Start Exploring
            </button>
          </motion.div>
        </motion.div>

        {/* Project Importance */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ marginBottom: '4rem' }}
        >
          <motion.div 
            variants={itemVariants} 
            style={{ 
              backgroundColor: 'rgba(30, 41, 59, 0.7)', 
              backdropFilter: 'blur(10px)',
              padding: '2.5rem', 
              borderRadius: '20px', 
              border: '1px solid rgba(59, 130, 246, 0.2)',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }}
          >
            <h2 style={{ fontSize: '2rem', fontWeight: '700', color: '#f8fafc', marginBottom: '1rem', borderBottom: '2px solid #3b82f6', paddingBottom: '0.5rem', display: 'inline-block' }}>
              Why This Project Matters
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1' }}>
              Machine learning is often perceived as a "black box" of complex mathematics and abstract algorithms. 
              This project aims to shatter that barrier by providing a visual, interactive interface where users can 
              see exactly how algorithms learn from data. By manipulating datasets and parameters in real-time, 
              users develop an intuitive grasp of concepts like convergence, overfitting, clustering, and dimensionality reduction. 
              This tool is essential for students, educators, and developers looking to solidify their understanding of the 
              foundational algorithms that power modern AI.
            </p>
          </motion.div>
        </motion.section>

        {/* Algorithm Explanations */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ marginBottom: '4rem' }}
        >
          <h2 style={{ fontSize: '2rem', fontWeight: '700', color: '#f8fafc', marginBottom: '3rem', textAlign: 'center' }}>
            Featured Algorithms
          </h2>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', 
            gap: '2rem' 
          }}>
            {algorithms.map((algo, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                onClick={() => navigate(algo.path)}
                style={{ 
                  backgroundColor: '#1e293b', 
                  padding: '2rem', 
                  borderRadius: '16px', 
                  border: '1px solid #334155',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  cursor: 'pointer'
                }}
              >
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  marginBottom: '1rem' 
                }}>
                  <div style={{ 
                    padding: '12px', 
                    borderRadius: '12px', 
                    backgroundColor: `${algo.color}20`, 
                    color: algo.color,
                    marginRight: '1rem'
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {algo.icon}
                    </svg>
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#f1f5f9', margin: 0 }}>
                    {algo.title}
                  </h3>
                </div>
                <p style={{ color: '#94a3b8', lineHeight: '1.6', flex: 1, marginBottom: '1.5rem' }}>
                  {algo.desc}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', color: algo.color, fontWeight: '600', fontSize: '0.95rem' }}>
                  Try Model 
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '6px' }}>
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Credits */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{ 
            textAlign: 'center', 
            marginTop: '4rem', 
            paddingTop: '2rem', 
            borderTop: '1px solid #334155',
            color: '#64748b'
          }}
        >
          <p style={{ fontSize: '1.2rem', fontWeight: '600', letterSpacing: '0.02em' }}>
            Made with <span style={{ color: '#ef4444' }}>❤</span> by <span style={{ color: '#f8fafc' }}>Mohamed Anour</span> from <span style={{ color: '#3b82f6' }}>Mundiapolis University</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default HomePage;
