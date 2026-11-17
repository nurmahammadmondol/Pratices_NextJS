import {Button, Card} from "@heroui/react";

const PRO_FEATURES = [
  "Unlimited projects and collaborators",
  "Priority support with 24h response",
  "Advanced analytics and exports",
] ;

export function CustomCard({user}) {
  console.log(user)
  return (
    <Card className="relative w-full max-w-md overflow-hidden border border-accent/20 bg-linear-to-br from-accent/12 via-surface to-surface-secondary shadow-lg shadow-accent/10 dark:border-accent/30 dark:from-accent/20 dark:via-surface dark:to-accent/8 dark:shadow-accent/5">
     

      <Card.Header className="relative gap-3">
        <h4>{user.name}</h4>
      </Card.Header>

      <Card.Content className="relative">
        <ul className="flex flex-col gap-2">
          {PRO_FEATURES.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm text-muted">
              {feature}
            </li>
          ))}
        </ul>
      </Card.Content>

     
    </Card>
  );
}