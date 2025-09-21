// pages/projects.tsx
import { CardContainer } from '../components/Cards/CardContainer';
import { FloatingCard } from '../components/Cards/FloatingCard';

const projects = [
  { id: 1, title: 'Balenciaga Aoyama', category: 'Fashion', x: 100, y: 150 },
  { id: 2, title: 'Museum Exhibition', category: 'Cultural', x: 450, y: 200 },
  { id: 3, title: 'Travis Scott Utopia', category: 'Entertainment', x: 200, y: 400 },
  // ... mais projetos
];

export default function Projects() {
  return (
    <CardContainer>
      {projects.map(project => (
        <FloatingCard
          key={project.id}
          title={project.title}
          category={project.category}
          x={project.x}
          y={project.y}
          onClick={() => console.log(project)}
        />
      ))}
    </CardContainer>
  );
}